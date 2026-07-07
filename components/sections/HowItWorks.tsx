import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProcessRoute, type RouteStep } from "./ProcessRoute";

const STEPS: RouteStep[] = [
  {
    name: "Discovery call",
    body: "Thirty minutes on where your time actually goes. You talk, I listen, and we find the workflow worth fixing first. If automation isn't the right answer for you, I'll say so on the call.",
  },
  {
    name: "Roadmap",
    body: "I map the workflow end to end and come back with a plan: what gets automated, what it should save you, and a fixed price. You decide with the full picture in front of you.",
  },
  {
    name: "Build and test",
    body: "I build the automation and run it against your real scenarios, with you watching. We adjust until it fits the way your business actually works.",
  },
  {
    name: "Launch and support",
    body: "It goes live in your business. I monitor it, tune it, and stay reachable. When your process changes, the automation changes with it.",
  },
];

/** How It Works (PLAN.md 2.6 / 4.2). Launch-time credibility workhorse. */
export function HowItWorks() {
  return (
    <Section mode="white" id="how-it-works" ariaLabelledby="how-title">
      <Container>
        <SectionHeader
          id="how-title"
          eyebrow="How it works"
          title="From first call to running automation, in four steps."
          align="center"
        />
        <ProcessRoute steps={STEPS} />
      </Container>
    </Section>
  );
}
