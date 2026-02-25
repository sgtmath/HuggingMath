
import React, { useState } from 'react';
import type { FAQItem } from '../types';
import { FAQ_DATA } from '../constants';

const FaqAccordionItem: React.FC<{
  faq: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-ctp-surface0 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left group"
        aria-expanded={isOpen}
      >
        <h3 className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-ctp-mauve' : 'text-ctp-text group-hover:text-ctp-mauve'}`}>{faq.question}</h3>
        <span className={`transform transition-all duration-300 flex items-center justify-center w-8 h-8 rounded-full ${isOpen ? 'rotate-180 bg-ctp-mauve text-ctp-base' : 'bg-ctp-surface0 text-ctp-mauve group-hover:bg-ctp-mauve group-hover:text-ctp-base'}`}>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
        <p className="text-ctp-subtext0 leading-relaxed pr-10">{faq.answer}</p>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-ctp-base">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ctp-text">Frequently Asked Questions</h2>
          <div className="w-20 h-1.5 bg-ctp-mauve mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-ctp-subtext0 max-w-2xl mx-auto">
            Have questions? We've got answers.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-ctp-mantle p-8 md:p-12 rounded-3xl shadow-sm border border-ctp-surface0">
          {FAQ_DATA.map((faq, index) => (
            <FaqAccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
