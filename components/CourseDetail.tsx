
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES_DATA } from '../constants';
import Header from './Header';
import Footer from './Footer';

const CourseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = COURSES_DATA.find(c => c.href === `/course/${slug}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col bg-ctp-base">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-ctp-text mb-4">Course Not Found</h2>
            <Link to="/" className="text-ctp-mauve hover:underline font-bold">Back to Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-ctp-mantle">
      <Header />
      <main className="flex-grow py-24">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-ctp-mauve hover:text-ctp-pink font-bold mb-10 transition-colors group">
            <div className="bg-ctp-mauve/10 p-2 rounded-lg mr-3 group-hover:bg-ctp-mauve group-hover:text-ctp-base transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            Back to Programs
          </Link>
          
          <div className="bg-ctp-base rounded-3xl shadow-xl p-8 md:p-16 border border-ctp-surface0 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ctp-mauve/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="text-ctp-mauve mr-6 scale-[2] bg-ctp-mauve/10 p-2 rounded-xl">
                  {course.icon}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-serif text-ctp-text tracking-tight">{course.title}</h1>
              </div>
              
              <div className="inline-block bg-ctp-mauve/10 text-ctp-mauve font-bold px-6 py-2 rounded-2xl mb-12">
                {course.level}
              </div>
              
              <div className="prose prose-lg max-w-none text-ctp-text">
                <p className="text-2xl leading-relaxed mb-12 text-ctp-subtext1 font-medium">
                  {course.description}
                </p>
                
                <div className="grid lg:grid-cols-2 gap-16">
                  <div>
                    <h2 className="text-3xl font-bold text-ctp-text mb-8 flex items-center">
                      <span className="w-8 h-1.5 bg-ctp-mauve rounded-full mr-4"></span>
                      What you'll learn
                    </h2>
                    <ul className="space-y-6">
                      {[
                        "Advanced problem-solving techniques",
                        "Conceptual depth in core mathematical areas",
                        "Preparation for national and international competitions",
                        "Personalized mentorship from expert tutors"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start group">
                          <div className="bg-ctp-green/10 text-ctp-green p-1.5 rounded-lg mr-4 mt-1 group-hover:bg-ctp-green group-hover:text-ctp-base transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-lg font-medium text-ctp-subtext0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-ctp-mantle p-10 rounded-3xl border border-ctp-surface0 shadow-inner">
                    <h3 className="text-2xl font-bold text-ctp-text mb-4">Ready to join?</h3>
                    <p className="text-ctp-subtext0 mb-8 leading-relaxed">
                      Enrollment is currently open for the upcoming session. Contact us to schedule a diagnostic assessment and find the perfect path for your journey.
                    </p>
                    <a href="/#contact" className="inline-block w-full text-center bg-ctp-mauve text-ctp-base font-bold px-8 py-4 rounded-2xl hover:bg-ctp-pink transition-all shadow-lg shadow-ctp-mauve/20 hover:scale-[1.02] active:scale-[0.98]">
                      Inquire Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
