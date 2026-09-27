"use client";

import { useState } from "react";

type AccordionService = {
  readonly name: string;
  readonly price: string;
  readonly description?: string;
  readonly warning?: string;
};

type AccordionServiceCategory = {
  readonly name: string;
  readonly description: string;
  readonly offerings: readonly AccordionService[];
};

type StructuredAnswer = {
  readonly paragraphs?: readonly string[];
  readonly bullets?: readonly string[];
  readonly services?: readonly AccordionServiceCategory[];
};

export type AccordionItem = readonly [string, string | StructuredAnswer];

function AnswerContent({ answer }: { answer: string | StructuredAnswer }) {
  if (typeof answer === "string") {
    return <p>{answer}</p>;
  }

  return (
    <>
      {answer.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {answer.bullets ? (
        <ul className="faq-checklist">
          {answer.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {answer.services ? (
        <div className="faq-service-guide">
          <p className="faq-service-guide-label">Explore every service</p>
          <div className="faq-service-grid">
            {answer.services.map((category) => (
              <section className="faq-service-category" key={category.name}>
                <h4>{category.name}</h4>
                <p className="faq-service-category-intro">{category.description}</p>
                <div className="faq-service-options">
                  {category.offerings.map((service) => (
                    <article className="faq-service-option" key={`${category.name}-${service.name}`}>
                      <div className="faq-service-option-heading">
                        <h5>{service.name}</h5>
                        <span>{service.price}</span>
                      </div>
                      {service.description ? <p>{service.description}</p> : null}
                      {service.warning ? <p className="faq-service-warning">{service.warning}</p> : null}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export function Accordion({
  items,
  idPrefix,
}: {
  items: readonly AccordionItem[];
  idPrefix: string;
}) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => {
        const isOpen = active === index;
        const id = `${idPrefix}-${index}`;
        return (
          <div className="faq-item" key={question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setActive(isOpen ? null : index)}
              >
                <span>{question}</span>
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            <div
              id={id}
              className={`faq-answer${typeof answer !== "string" && answer.services ? " faq-answer-wide" : ""}`}
              hidden={!isOpen}
            >
              <AnswerContent answer={answer} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
