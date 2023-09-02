import React from "react";
import "./FAQs.css";

function FAQs({ question, answer }) {
  return (
    <div className="faqs">
      <div className="faqs__container">
        <div className="question">{question}</div>
        <div className="answer">{answer}</div>
      </div>
    </div>
  );
}

export default FAQs;
