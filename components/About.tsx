
import React from 'react';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="bg-brand-accent-light text-brand-dark rounded-full p-4 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold font-serif text-brand-dark mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">Why HuggingMath?</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We believe that true mastery in mathematics comes from deep thinking and a passion for discovery, not rote memorization.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Expert Mentorship"
            description="Learn from former IMO medalists and world-class academics who have navigated the path to success."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
          />
          <FeatureCard
            title="Curated Curriculum"
            description="Our syllabus is meticulously designed to cover all facets of Olympiad mathematics, from foundational concepts to advanced strategies."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" /></svg>}
          />
          <FeatureCard
            title="Problem-Solving Focus"
            description="We emphasize elegant solutions and creative thinking, preparing you for the non-standard problems unique to Olympiads."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
