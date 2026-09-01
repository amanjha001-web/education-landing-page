
import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Laptop,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Badge from "../common/Badge";

const features = [
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn directly from experienced professionals who bring real-world knowledge into every lesson.",
  },
  {
    icon: Laptop,
    title: "Practical Learning",
    description:
      "Build projects, solve real problems, and develop skills that you can actually use.",
  },
  {
    icon: Award,
    title: "Recognized Certificates",
    description:
      "Earn certificates that showcase your skills and help strengthen your professional profile.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Focused",
    description:
      "Follow structured learning paths designed around today's most valuable career skills.",
  },
  {
    icon: ShieldCheck,
    title: "Learn at Your Pace",
    description:
      "Access your courses anytime and learn comfortably around your schedule.",
  },
  {
    icon: CheckCircle2,
    title: "Lifetime Access",
    description:
      "Revisit lessons and course materials whenever you need to refresh your knowledge.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="about"
      className="bg-background py-20 sm:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left Content */}
          <div>
            <SectionTitle
              align="left"
              eyebrow="Why Choose Us"
              title="Everything you need to learn with confidence"
              description="We combine expert instruction, practical projects, and flexible learning to help you turn knowledge into real-world skills."
            />

            {/* Highlight */}
            <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Award className="h-5 w-5" />
                </div>

                <div>
                  <Badge size="sm">
                    Built for your growth
                  </Badge>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    From your first lesson to your next career
                    opportunity, every part of the learning experience
                    is designed to keep you moving forward.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;

