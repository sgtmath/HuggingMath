
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-ctp-base">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-ctp-text">Ready to Ascend?</h2>
        <div className="w-20 h-1.5 bg-ctp-mauve mx-auto mt-4 rounded-full mb-8"></div>
        <p className="mt-4 text-lg text-ctp-subtext0 max-w-2xl mx-auto mb-12 leading-relaxed">
          Join a community of passionate problem-solvers. Reach out to us for enrollment details and to schedule an assessment.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-lg">
            <div className="flex items-center gap-4 group">
                <div className="bg-ctp-mauve/10 p-4 rounded-2xl group-hover:bg-ctp-mauve group-hover:text-ctp-base transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ctp-mauve group-hover:text-ctp-base transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <a href="mailto:admissions@huggingmath.com" className="text-ctp-text font-bold hover:text-ctp-mauve transition-colors">admissions@huggingmath.com</a>
            </div>
             <div className="flex items-center gap-4 group">
                <div className="bg-ctp-mauve/10 p-4 rounded-2xl group-hover:bg-ctp-mauve group-hover:text-ctp-base transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ctp-mauve group-hover:text-ctp-base transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <a href="tel:+1-234-567-890" className="text-ctp-text font-bold hover:text-ctp-mauve transition-colors">+1 (234) 567-890</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
