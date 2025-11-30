import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this legal?",
    answer:
      "Yes. Aged corporations are fully legal and commonly used for business credit positioning.",
  },
  {
    question: "Do these corporations have credit histories?",
    answer:
      "No. They have aged history, not credit activity — making them clean and ready for your credit building journey.",
  },
  {
    question: "Will this hurt my personal credit?",
    answer: "No. Business credit is built separately from personal credit.",
  },
  {
    question: "How fast can I get approved?",
    answer: "Most clients see approvals within 30–45 days.",
  },
  {
    question: "How fast do I get my corporation?",
    answer: "Within 72 hours of completing your strategy call and making your decision.",
  },
  {
    question: "Can I choose the age of the corporation?",
    answer: "Yes. We have multiple age tiers available (2-5 years) to match your funding goals.",
  },
  {
    question: "What is the investment to get started?",
    answer:
      "Our full-service funding solutions start at $5,000. This investment includes your aged corporation, all documentation, and our complete credit building and funding program.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24" data-testid="faq-section">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-faq-headline">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-md px-4"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left font-semibold py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
