import { TopoBackground } from "@/components/layout/TopoBackground";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import styles from "./not-found.module.css";

/**
 * 404 (PLAN.md 3.16 / 4.2). Full-viewport navy with the topo running a little
 * hotter — the joke is you're deep in the terrain. Standalone (outside the
 * marketing layout): a wordmark home-link up top and one route home.
 */
export default function NotFound() {
  return (
    <div className={styles.page}>
      <TopoBackground asset="a" intensity="hot" />
      <div className={styles.logo}>
        <Logo onDark />
      </div>
      <div className={styles.col}>
        <h1 className={`h1 ${styles.title}`}>You&rsquo;re off the map.</h1>
        <p className={styles.body}>
          This page doesn&rsquo;t exist, or it moved. Either way, the trail home
          is right here.
        </p>
        <Button href="/" variant="primary" surface="dark">
          Back to home
        </Button>
      </div>
    </div>
  );
}
