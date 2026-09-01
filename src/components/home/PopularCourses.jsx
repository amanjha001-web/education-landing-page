
import { ArrowRight, Clock3, Star, Users } from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Badge from "../common/Badge";
import Button from "../common/Button";

import { courses } from "../../constants/courses";

const PopularCourses = () => {
  return (
    <section
      id="courses"
      className="bg-muted/30 py-20 sm:py-24"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            align="left"
            eyebrow="Popular Courses"
            title="Learn skills that make an impact"
            description="Explore our most popular courses designed by industry experts to help you build practical, career-ready skills."
          />

          <Button
            variant="outline"
            className="w-fit shrink-0"
          >
            View All Courses
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Course Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 6).map((course) => (
            <article
              key={course.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <div className="absolute left-4 top-4">
                  <Badge
                    variant="primary"
                    className="bg-background/90 backdrop-blur-sm"
                  >
                    {course.category}
                  </Badge>
                </div>

                {/* Featured */}
                {course.featured && (
                  <div className="absolute right-4 top-4">
                    <Badge className="bg-amber-500 text-white">
                      Popular
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-current text-amber-500" />

                    <span className="text-sm font-semibold text-foreground">
                      {course.rating}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      ({course.reviews})
                    </span>
                  </div>

                  <span className="text-sm font-bold text-primary">
                    {course.price}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-7 text-foreground transition-colors group-hover:text-primary">
                  {course.title}
                </h3>

                {/* Instructor */}
                <p className="mt-2 text-sm text-muted-foreground">
                  By {course.instructor}
                </p>

                {/* Meta */}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" />
                    {course.duration}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {course.students}
                  </span>

                  <span>{course.level}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile / Bottom CTA */}
        <div className="mt-10 flex justify-center lg:hidden">
          <Button variant="outline">
            View All Courses
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PopularCourses;
