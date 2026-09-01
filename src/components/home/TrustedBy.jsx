
import Container from "../common/Container";

const trustedCompanies = [
  "Google",
  "Microsoft",
  "Amazon",
  "IBM",
  "Meta",
  "Adobe",
];

const TrustedBy = () => {
  return (
    <section
      aria-label="Trusted companies"
      className="border-y border-border bg-muted/30"
    >
      <Container>
        <div className="py-10 sm:py-12">
          {/* Heading */}
          <p className="text-center text-sm font-medium text-muted-foreground">
            Trusted by learners and professionals from leading companies
          </p>

          {/* Logos */}
          <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {trustedCompanies.map((company) => (
              <div
                key={company}
                className="flex items-center justify-center"
              >
                <span className="text-lg font-bold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground sm:text-xl">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustedBy;
