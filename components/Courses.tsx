
import React from 'react';
import type { Course } from '../types';
import { COURSES_DATA } from '../constants';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
    <div className="p-8">
      <div className="text-brand-accent mb-4">
        {course.icon}
      </div>
      <h3 className="text-2xl font-bold font-serif text-brand-dark mb-2">{course.title}</h3>
      <p className="text-slate-600 mb-4 flex-grow">{course.description}</p>
      <div className="mt-auto pt-4">
        <span className="inline-block bg-brand-accent-light/20 text-brand-dark font-semibold px-3 py-1 rounded-full text-sm">
          {course.level}
        </span>
      </div>
    </div>
  </div>
);

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">Our Programs</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Tailored programs designed to guide students at every stage of their Olympiad journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
