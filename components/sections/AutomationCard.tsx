import { Icon, type IconName } from "@/components/icons/Icon";
import styles from "./AutomationCard.module.css";

/** One card in the What We Automate grid (PLAN.md 4.2). Informative, not navigational. */
export function AutomationCard({
  icon,
  title,
  body,
}: {
  icon: IconName;
  title: string;
  body: string;
}) {
  return (
    <div className={styles.card}>
      <span className={styles.iconWrap}>
        <Icon name={icon} size={24} />
      </span>
      <h3 className={`h3 ${styles.title}`}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </div>
  );
}
