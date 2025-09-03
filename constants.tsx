
import React from 'react';
import type { Course, Tutor, Testimonial } from './types';
import { SigmaIcon, InfinityIcon, CompassIcon } from './components/icons/MathIcons';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Problem of the Day', href: '#potd' },
  { name: 'Contact', href: '#contact' },
];

export const COURSES_DATA: Course[] = [
  {
    icon: <CompassIcon />,
    title: 'Junior Olympiad Foundation',
    description: 'Building a strong foundation in problem-solving techniques, number theory, and introductory geometry for middle school students.',
    level: 'Grades 6-8',
  },
  {
    icon: <SigmaIcon />,
    title: 'Senior Olympiad Advanced',
    description: 'Deep dive into advanced topics including combinatorics, advanced algebra, and functional equations for high school competitors.',
    level: 'Grades 9-12',
  },
  {
    icon: <InfinityIcon />,
    title: 'IMO Training Camp',
    description: 'An intensive, invitation-only bootcamp for national-level qualifiers preparing for the International Mathematical Olympiad.',
    level: 'Invitation Only',
  },
];



export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "HuggingMath transformed my approach to math. The problem-solving strategies I learned here were key to my USAMO qualification.",
    name: 'Alex Johnson',
    achievement: 'USAMO Qualifier, 2023',
  },
  {
    quote: "The tutors are not just teachers; they are mentors. Their guidance was invaluable in my journey to winning a silver medal.",
    name: 'Priya Sharma',
    achievement: 'IMO Silver Medalist, 2024',
  },
  {
    quote: "The 'Problem of the Day' was my favorite feature. It kept me sharp and constantly challenged my thinking. A fantastic resource!",
    name: 'Ben Carter',
    achievement: 'AMC 12 Perfect Score, 2023',
  },
];
