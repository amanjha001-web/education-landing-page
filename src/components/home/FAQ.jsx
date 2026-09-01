
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

import { faq } from "../../constants/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="faq"
      className="bg-background py-20 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left */}
          <div>
            <SectionTitle
              align="left"
              eyebrow="FAQ"
              title="Questions? We've got answers."
              description="Find answers to the most common questions about our courses, learning experience, certificates, and programs."
            />

            <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-base font-bold text-foreground">
                Still have questions?
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Can't find what you're looking for? Our support team
                is ready to help.
              </p>

              <Button
                variant="outline"
                className="mt-5"
              >
                Contact Support
              </Button>
            </div>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-border rounded-2xl border border-border bg-card">
            {faq.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-muted/40 sm:px-6"
                  >
                    <span className="text-sm font-semibold leading-6 text-foreground sm:text-base">
                      {item.question}
                    </span>

                    <span
                      className={[
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                        "bg-muted text-muted-foreground transition-all duration-300",
                        isOpen
                          ? "rotate-180 bg-primary/10 text-primary"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    className={[
                      "grid transition-[grid-template-rows] duration-300",
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pr-16 text-sm leading-7 text-muted-foreground sm:px-6 sm:pb-6 sm:pr-20">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;