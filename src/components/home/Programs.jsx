
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Code2,
  Database,
  Megaphone,
  Palette,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Badge from "../common/Badge";
import Button from "../common/Button";

import { programs } from "../../constants/programs";

const iconMap = {
  code: Code2,
  data: Database,
  design: Palette,
  marketing: Megaphone,
  business: BriefcaseBusiness,
  ai: Sparkles,
};

const Programs = () => {
  return (
    <section
      id="programs"
      className="bg-background py-20 sm:py-24"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            align="left"
            eyebrow="Career Programs"
            title="Build skills for the career you want"
            description="Choose a structured program that combines multiple skills, practical projects, and a clear path toward your career goals."
          />

          <Button
            variant="outline"
            className="w-fit shrink-0"
          >
            Explore Programs
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.slice(0, 6).map((program, index) => {
            const Icon =
              iconMap[program.icon] || Code2;

            return (
              <article
                key={program.id || program.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 sm:p-8"
              >
                {/* Decorative Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:opacity-100"
                />

                <div className="relative">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>

                    {program.featured && (
                      <Badge variant="primary">
                        <Sparkles className="h-3.5 w-3.5" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Category */}
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-primary">
                    {program.category}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                    {program.description}
                  </p>

                  {/* Skills */}
                  {program.skills?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {program.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bottom */}
                  <div className="mt-7 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      {program.duration && (
                        <span className="flex items-center gap-1.5">
                          <Clock3 className="h-3.5 w-3.5" />
                          {program.duration}
                        </span>
                      )}

                      {program.level && (
                        <span>{program.level}</span>
                      )}
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
                    >
                      View Program
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Programs;
