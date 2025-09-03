
import React from 'react';
import type { Testimonial } from '../types';
import { TESTIMONIALS_DATA } from '../constants';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
    <div className="flex-grow">
      <p className="text-slate-600 italic mb-6">"{testimonial.quote}"</p>
    </div>
    <div className="mt-auto">
      <p className="font-bold font-serif text-brand-dark">{testimonial.name}</p>
      <p className="text-brand-accent font-medium">{testimonial.achievement}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">Success Stories</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from our alumni who have achieved their Olympiad dreams.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
