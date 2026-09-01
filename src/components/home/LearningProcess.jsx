
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Rocket,
  Target,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Choose Your Course",
    description:
      "Explore our curated courses and choose the learning path that matches your goals and interests.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Learn from Experts",
    description:
      "Follow structured lessons taught by experienced instructors with practical examples and guidance.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Practice & Build",
    description:
      "Apply what you learn through hands-on projects, exercises, and real-world challenges.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Grow Your Career",
    description:
      "Earn your certificate, showcase your skills, and take the next step toward your career goals.",
  },
];

const LearningProcess = () => {
  return (
    <section
      id="learning-path"
      className="bg-muted/30 py-20 sm:py-24"
    >
      <Container>
        <SectionTitle
          eyebrow="How It Works"
          title="A simpler way to learn and grow"
          description="Follow a clear learning journey designed to turn your time and effort into practical, valuable skills."
        />

        {/* Steps */}
        <div className="relative mt-14">
          {/* Connecting Line */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-12 hidden h-px bg-border lg:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative text-center"
                >
                  {/* Icon */}
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Number */}
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-primary text-[10px] font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6 px-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  {step.number !== "04" && (
                    <div className="mt-6 flex justify-center text-border sm:hidden">
                      <ArrowRight className="h-5 w-5 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mx-auto mt-14 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-primary/10 bg-primary/5 px-5 py-4 text-center">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />

          <p className="text-sm font-medium text-foreground">
            Learn at your own pace and build skills that stay with you.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default LearningProcess;
