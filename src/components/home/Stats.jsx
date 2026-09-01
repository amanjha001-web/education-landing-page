
import {
  Users,
  BookOpen,
  GraduationCap,
  Star,
} from "lucide-react";

import Container from "../common/Container";

const stats = [
  {
    value: "50K+",
    label: "Active Learners",
    description: "Students learning with us",
    icon: Users,
  },
  {
    value: "200+",
    label: "Expert Courses",
    description: "Career-focused courses",
    icon: BookOpen,
  },
  {
    value: "50+",
    label: "Expert Instructors",
    description: "Industry professionals",
    icon: GraduationCap,
  },
  {
    value: "4.9/5",
    label: "Average Rating",
    description: "From our learners",
    icon: Star,
  },
];

const Stats = () => {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={[
                  "group relative p-6 sm:p-8",
                  "transition-colors hover:bg-muted/50",
                  index !== stats.length - 1
                    ? "border-b border-border lg:border-b-0 lg:border-r"
                    : "",
                  index === 1
                    ? "sm:border-r sm:border-border lg:border-r"
                    : "",
                  index === 2
                    ? "sm:border-b-0 lg:border-r"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Value */}
                <p className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {stat.value}
                </p>

                {/* Label */}
                <h3 className="mt-1 text-sm font-semibold text-foreground">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
