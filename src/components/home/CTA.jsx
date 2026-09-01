
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
import Badge from "../common/Badge";

const CTA = () => {
  return (
    <section
      id="contact"
      className="bg-background py-20 sm:py-24"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-xl shadow-primary/10 sm:px-10 lg:px-16 lg:py-20">
          {/* Decorative Elements */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">
            <Badge className="border-white/20 bg-white/10 text-white hover:bg-white/15">
              <Sparkles className="h-3.5 w-3.5" />
              Your next chapter starts here
            </Badge>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to build skills that move your career forward?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/80 sm:text-base sm:leading-8">
              Join thousands of learners building practical skills,
              completing real projects, and working toward their
              professional goals.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Start Learning
                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Explore Courses
              </Button>
            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-primary-foreground/80 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Learn at your own pace
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Expert-led courses
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Career-focused learning
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
