
import { Quote, Star } from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Rahul Singh",
    role: "Frontend Developer",
    course: "Full Stack Development",
    rating: 5,
    review:
      "The practical projects completely changed how I learn. I was able to build real applications and confidently apply for frontend developer roles.",
    initials: "RS",
    featured: true,
  },
  {
    id: 2,
    name: "Ananya Verma",
    role: "Data Analyst",
    course: "Data Science & Analytics",
    rating: 5,
    review:
      "The lessons are structured really well and the instructors explain difficult concepts in a very simple way.",
    initials: "AV",
  },
  {
    id: 3,
    name: "Karan Mehta",
    role: "UI/UX Designer",
    course: "Product Design",
    rating: 5,
    review:
      "I loved the project-based approach. It helped me build a portfolio instead of just watching tutorials.",
    initials: "KM",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-4 w-4 fill-current text-amber-500"
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="success-stories"
      className="bg-background py-20 sm:py-24"
    >
      <Container>
        <SectionTitle
          eyebrow="Student Stories"
          title="Loved by learners around the world"
          description="See how learners are using their new skills to build projects, grow professionally, and move closer to their goals."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Featured Testimonial */}
          {testimonials
            .filter((testimonial) => testimonial.featured)
            .map((testimonial) => (
              <article
                key={testimonial.id}
                className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 p-7 sm:p-9"
              >
                {/* Decorative Quote */}
                <Quote
                  aria-hidden="true"
                  className="absolute right-6 top-6 h-20 w-20 text-primary/10"
                />

                <div className="relative">
                  <StarRating rating={testimonial.rating} />

                  <blockquote className="mt-6 text-xl font-medium leading-8 tracking-tight text-foreground sm:text-2xl sm:leading-9">
                    “{testimonial.review}”
                  </blockquote>

                  <div className="mt-8 flex items-center gap-4 border-t border-primary/10 pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {testimonial.initials}
                    </div>

                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>

                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 inline-flex rounded-full bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
                    Completed: {testimonial.course}
                  </div>
                </div>
              </article>
            ))}

          {/* Other Testimonials */}
          <div className="grid gap-6">
            {testimonials
              .filter((testimonial) => !testimonial.featured)
              .map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-7"
                >
                  <StarRating rating={testimonial.rating} />

                  <blockquote className="mt-4 text-base leading-7 text-foreground">
                    “{testimonial.review}”
                  </blockquote>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-bold text-foreground">
                        {testimonial.initials}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {testimonial.name}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <span className="hidden rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground sm:inline-flex">
                      {testimonial.course}
                    </span>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;