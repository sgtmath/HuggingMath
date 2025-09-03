
import React from 'react';

export interface Course {
  icon: React.ReactNode;
  title: string;
  description: string;
  level: string;
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
