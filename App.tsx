
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CourseDetail from './components/CourseDetail';
import BlogDetail from './components/BlogDetail';

const HomePage: React.FC = () => (
  <div className="bg-ctp-base">
    <Header />
    <main>
      <Hero />
      <About />
      <Courses />
      <Blog />
      <FAQ />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:slug" element={<CourseDetail />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
