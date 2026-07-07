"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons/Icon";
import { siteConfig } from "@/site.config";
import styles from "./NewsletterForm.module.css";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Newsletter signup (PLAN.md 4.2). No backend at launch: posts to Kit's hosted
 * form endpoint (NEWSLETTER_ENDPOINT from config) and shows an inline
 * confirmation on success. On failure it shows the error copy and keeps the
 * form so the visitor can retry.
 *
 * NOTE for Jacob: set NEWSLETTER_ENDPOINT to the real Kit form URL. Kit's
 * classic form endpoint accepts the field name `email_address`; if your form
 * uses a different field, update FIELD_NAME below to match.
 */
const FIELD_NAME = "email_address";

export function NewsletterForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get(FIELD_NAME) || "").trim();
    if (!email) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(siteConfig.NEWSLETTER_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Bad status ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className={styles.success} role="status">
        <span className={styles.check} aria-hidden="true">
          <Icon name="check" size={18} />
        </span>
        You&rsquo;re in. Watch your inbox for a confirmation email.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <label htmlFor={id} className="visuallyHidden">
          Email address
        </label>
        <input
          id={id}
          className={styles.input}
          type="email"
          name={FIELD_NAME}
          placeholder="you@yourbusiness.com"
          autoComplete="email"
          required
          aria-invalid={status === "error"}
        />
        <Button
          type="submit"
          variant="primary"
          surface="light"
          className={styles.submit}
        >
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </Button>
      </div>

      <p className={styles.microcopy} aria-live="polite">
        {status === "error"
          ? "That email didn't go through. Check the address and try again."
          : "No spam, no daily drip. Unsubscribe anytime."}
      </p>
    </form>
  );
}
