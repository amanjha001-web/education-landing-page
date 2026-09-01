
import { ArrowRight, Play, CheckCircle2, Users } from "lucide-react";

import Container from "../common/Container";
import Badge from "../common/Badge";
import Button from "../common/Button";

import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-background"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <Container>
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          {/* Content */}
          <div className="max-w-2xl">
            <Badge
              variant="primary"
              className="mb-6"
            >
              Learn • Grow • Succeed
            </Badge>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Learn skills that{" "}
              <span className="text-primary">
                shape your future.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Build practical, career-ready skills with expert-led
              courses, hands-on projects, and a learning experience
              designed around your goals.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg">
                Explore Courses
                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <Play className="h-3.5 w-3.5 fill-current text-primary" />
                </span>
                Watch Demo
              </Button>
            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Expert instructors
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Practical projects
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Certificates
              </div>
            </div>

            {/* Learners */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["A", "R", "S", "P"].map((letter, index) => (
                  <div
                    key={`${letter}-${index}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-bold text-foreground"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />

                  <span className="text-sm font-semibold text-foreground">
                    50,000+ learners
                  </span>
                </div>

                <p className="text-xs text-muted-foreground">
                  Learning with us worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-10 rounded-full bg-primary/15 blur-3xl"
            />

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-2xl shadow-primary/10">
              <div className="overflow-hidden rounded-2xl bg-muted">
                <img
                  src={heroImage}
                  alt="Students learning online"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Floating Card — Courses */}
            <div className="absolute -left-4 bottom-8 hidden rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Courses completed
                  </p>

                  <p className="text-lg font-bold text-foreground">
                    120K+
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card — Rating */}
            <div className="absolute -right-4 top-10 hidden rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10 text-sm">
                  ⭐
                </div>

                <div>
                  <p className="text-sm font-bold text-foreground">
                    4.9/5
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Student rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
