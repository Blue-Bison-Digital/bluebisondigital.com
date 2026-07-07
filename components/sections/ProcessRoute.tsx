import { Reveal } from "@/components/motion/Reveal";
import styles from "./ProcessRoute.module.css";

export type RouteStep = { name: string; body: string };

/**
 * The waypoint route (PLAN.md 4.1 waypoint extension): steps run vertically in
 * a single column, a thin dashed blue trail line connecting 40px circular
 * waypoint markers. The only terrain reference on a light background — a
 * diagram, not a texture. Reused verbatim by Home and the Roadmap page.
 */
export function ProcessRoute({ steps }: { steps: RouteStep[] }) {
  return (
    <ol className={styles.route}>
      {steps.map((step, i) => (
        <Reveal as="li" key={step.name} className={styles.step} delay={i * 70}>
          <span className={styles.marker} aria-hidden="true">
            {i + 1}
          </span>
          <div className={styles.content}>
            <h3 className={`h3 ${styles.name}`}>{step.name}</h3>
            <p className={styles.body}>{step.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
