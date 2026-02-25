
import React from 'react';
import type { Testimonial } from '../types';
import { TESTIMONIALS_DATA } from '../constants';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-ctp-base p-10 rounded-3xl shadow-sm border border-ctp-surface0 relative group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
    <div className="absolute -top-5 left-10 bg-ctp-peach text-ctp-base p-3 rounded-2xl shadow-lg shadow-ctp-peach/20">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H4.017V21H6.017Z" />
      </svg>
    </div>
    <div className="flex-grow pt-4">
      <p className="text-ctp-text text-lg italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
    </div>
    <div className="flex items-center mt-auto">
      <div className="w-12 h-12 bg-ctp-surface0 rounded-full flex items-center justify-center text-ctp-peach font-bold text-xl mr-4">
        {testimonial.name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-ctp-text">{testimonial.name}</h4>
        <p className="text-sm text-ctp-peach font-semibold">{testimonial.achievement}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-ctp-mantle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ctp-text">Success Stories</h2>
          <div className="w-20 h-1.5 bg-ctp-peach mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-ctp-subtext0 max-w-2xl mx-auto">
            Hear from our alumni who have achieved their Olympiad dreams.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
