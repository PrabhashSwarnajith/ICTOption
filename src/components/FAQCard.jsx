import React from 'react';

const FAQCard = props => {
  // Support both { question, answer } and { faq: { question, answer } }
  const question = props.question ?? props.faq?.question;
  const answer = props.answer ?? props.faq?.answer;
  if (!question || !answer) return null;
  return (
    <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700 transform hover:scale-105 transition-all duration-300">
      <h3 className="text-lg font-semibold text-secondary mb-3 font-heading">
        {question}
      </h3>
      <p className="text-neutral-300 font-body">{answer}</p>
    </div>
  );
};

export default FAQCard;
