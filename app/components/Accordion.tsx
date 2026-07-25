"use client";

import { useState } from "react";

export type AccordionItem = readonly [string, string];

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
            <div id={id} className="faq-answer" hidden={!isOpen}>
              <p>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
