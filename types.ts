
import React from 'react';

export interface Course {
  icon: React.ReactNode;
  title: string;
  description: string;
  level: string;
  href: string;
}

export interface Tutor {
  image: string;
  name: string;
  credentials: string[];
  bio: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  achievement: string;
}

export interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  slug: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
