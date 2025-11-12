import React, { useState } from "react";
import "./Faqs.css"; // Import CSS file

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="accordion">
      <button className="accordion-header" onClick={toggleAccordion}>
        <h2>{question}</h2>
        <span className="accordion-icon">{isOpen ? "▼" : "▲"}</span>
      </button>
      {isOpen && <p className="accordion-content">{answer}</p>}
    </article>
  );
}

function FAQs() {
  const faqs = [
    {
      question: "This is question 1?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "This is question 2?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "This is question 3?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  return (
    <div className="faqs-section">
      <div className="faqs-container">
        <h1 className="faqs-title">Frequently Asked Questions</h1>
        <p className="faqs-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}

        <div className="faqs-footer">
          Haven't got your answer?
          <a href="/support" className="support-link">
            Contact our support now
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
