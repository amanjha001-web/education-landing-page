
import { ArrowRight, BriefcaseBusiness, Star, Users } from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

const instructors = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Senior Full Stack Developer",
    company: "Tech Industry",
    experience: "10+ Years",
    students: "18K+",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Data Science Specialist",
    company: "Analytics & AI",
    experience: "8+ Years",
    students: "14K+",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "Product & UI/UX Designer",
    company: "Product Design",
    experience: "9+ Years",
    students: "11K+",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "Digital Marketing Expert",
    company: "Growth & Marketing",
    experience: "7+ Years",
    students: "9K+",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  },
];

const Instructors = () => {
  return (
    <section
      id="instructors"
      className="bg-muted/30 py-20 sm:py-24"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            align="left"
            eyebrow="Expert Instructors"
            title="Learn from people who know the industry"
            description="Our instructors combine professional experience with a passion for teaching, helping you learn skills that actually matter."
          />

          <Button
            variant="outline"
            className="w-fit shrink-0"
          >
            Meet All Instructors
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Instructor Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <article
              key={instructor.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Rating */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-background/95 px-2.5 py-1.5 text-xs font-semibold shadow-sm backdrop-blur">
                  <Star className="h-3.5 w-3.5 fill-current text-amber-500" />
                  {instructor.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground">
                  {instructor.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-primary">
                  {instructor.role}
                </p>

                <p className="mt-2 text-xs text-muted-foreground">
                  {instructor.company}
                </p>

                {/* Meta */}
                <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />

                    <div>
                      <p className="text-[11px] text-muted-foreground">
                        Experience
                      </p>

                      <p className="text-xs font-semibold text-foreground">
                        {instructor.experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />

                    <div>
                      <p className="text-[11px] text-muted-foreground">
                        Students
                      </p>

                      <p className="text-xs font-semibold text-foreground">
                        {instructor.students}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Instructors;
