
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../types';
import { COURSES_DATA } from '../constants';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <Link to={course.href} className="bg-ctp-base rounded-2xl shadow-sm border border-ctp-surface0 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group hover:shadow-xl hover:border-ctp-mauve/30">
    <div className="p-8">
      <div className="text-ctp-mauve mb-6 group-hover:scale-110 transition-transform duration-300">
        {course.icon}
      </div>
      <h3 className="text-2xl font-bold font-serif text-ctp-text mb-3 group-hover:text-ctp-mauve transition-colors duration-300">{course.title}</h3>
      <p className="text-ctp-subtext0 mb-6 flex-grow leading-relaxed">{course.description}</p>
      <div className="mt-auto pt-4 flex items-center justify-between">
        <span className="inline-block bg-ctp-mauve/10 text-ctp-mauve font-semibold px-4 py-1.5 rounded-xl text-sm">
          {course.level}
        </span>
        <span className="text-ctp-mauve font-bold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  </Link>
);

const Courses: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCourses = showAll ? COURSES_DATA : COURSES_DATA.slice(0, 3);

  return (
    <section id="courses" className="py-24 bg-ctp-mantle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ctp-text">Our Programs</h2>
          <div className="w-20 h-1.5 bg-ctp-mauve mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-ctp-subtext0 max-w-2xl mx-auto">
            Tailored programs designed to guide students at every stage of their Olympiad journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {visibleCourses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
        
        {!showAll && COURSES_DATA.length > 3 && (
          <div className="text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="bg-ctp-mauve text-ctp-base font-bold px-10 py-4 rounded-2xl hover:bg-ctp-pink transition-all shadow-lg shadow-ctp-mauve/20 hover:scale-105 active:scale-95"
            >
              View More Programs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
