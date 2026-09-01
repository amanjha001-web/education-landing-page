
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileBadge2,
  TrendingUp,
} from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
import Badge from "../common/Badge";

const benefits = [
  "Build a portfolio with real-world projects",
  "Get career-ready with practical skills",
  "Earn certificates you can showcase",
  "Learn from experienced industry professionals",
];

const CareerSection = () => {
  return (
    <section
      id="careers"
      className="bg-muted/30 py-20 sm:py-24"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          {/* Decorative Elements */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
          />

          <div className="relative grid items-center gap-12 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-14">
            {/* Content */}
            <div className="max-w-2xl">
              <Badge variant="primary">
                <TrendingUp className="h-3.5 w-3.5" />
                Career Growth
              </Badge>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Turn your learning into your next{" "}
                <span className="text-primary">
                  career opportunity.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Don't just collect courses. Build practical skills,
                create projects, strengthen your portfolio, and become
                ready for the opportunities you want.
              </p>

              {/* Benefits */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm leading-6 text-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button size="lg">
                  Start Learning
                  <ArrowRight className="h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                >
                  Explore Career Paths
                </Button>
              </div>
            </div>

            {/* Career Visual */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-border bg-background p-5 shadow-xl sm:p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Your learning progress
                    </p>

                    <p className="mt-1 text-lg font-bold text-foreground">
                      Career Ready
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-7">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-foreground">
                      Overall Progress
                    </span>

                    <span className="font-semibold text-primary">
                      82%
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[82%] rounded-full bg-primary" />
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-7 space-y-3">
                  {[
                    {
                      label: "Technical Skills",
                      value: "Completed",
                    },
                    {
                      label: "Practical Projects",
                      value: "8 / 10",
                    },
                    {
                      label: "Career Preparation",
                      value: "In Progress",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl bg-muted/60 px-4 py-3"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />

                        <span className="text-sm font-medium text-foreground">
                          {item.label}
                        </span>
                      </div>

                      <span className="text-xs font-semibold text-muted-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Certificate */}
                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <FileBadge2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Certificate unlocked
                    </p>

                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Showcase your achievement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CareerSection;
