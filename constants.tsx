
import React from 'react';
import type { Course, Tutor, Testimonial, BlogPost, FAQItem } from './types';
import { SigmaIcon, InfinityIcon, CompassIcon } from './components/icons/MathIcons';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Blog', href: '#blog' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const COURSES_DATA: Course[] = [
  {
    icon: <CompassIcon />,
    title: 'Junior Olympiad Foundation',
    description: 'Building a strong foundation in problem-solving techniques, number theory, and introductory geometry for middle school students.',
    level: 'Grades 6-8',
    href: '/course/junior-olympiad',
  },
  {
    icon: <SigmaIcon />,
    title: 'Senior Olympiad Advanced',
    description: 'Deep dive into advanced topics including combinatorics, advanced algebra, and functional equations for high school competitors.',
    level: 'Grades 9-12',
    href: '/course/senior-olympiad',
  },
  {
    icon: <InfinityIcon />,
    title: 'IMO Training Camp',
    description: 'An intensive, invitation-only bootcamp for national-level qualifiers preparing for the International Mathematical Olympiad.',
    level: 'Invitation Only',
    href: '/course/imo-training-camp',
  },
  {
    icon: <SigmaIcon />,
    title: 'JEE (advanced) + isi cmi',
    description: 'A specialized program targeting the rigorous requirements of JEE Advanced along with ISI and CMI entrance exams.',
    level: 'Grades 11-12',
    href: '/course/jee-isi-cmi',
  },
  {
    icon: <CompassIcon />,
    title: 'Program 2',
    description: 'Description for program 2. Focused on advanced mathematical concepts and applications.',
    level: 'Advanced',
    href: '/course/program-2',
  },
  {
    icon: <InfinityIcon />,
    title: 'Program 3',
    description: 'Description for program 3. A comprehensive course for mathematical excellence.',
    level: 'All Levels',
    href: '/course/program-3',
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
    quote: "The curriculum is perfectly structured. It kept me sharp and constantly challenged my thinking. A fantastic resource!",
    name: 'Ben Carter',
    achievement: 'AMC 12 Perfect Score, 2023',
  },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    category: 'Number Theory',
    title: 'The Elegance of Euclidean Algorithm',
    excerpt: 'Discover the profound simplicity and power of the Euclidean algorithm, a cornerstone of number theory that has fascinated mathematicians for centuries.',
    date: 'July 15, 2024',
    slug: 'euclidean-algorithm',
    content: `
# The Elegance of the Euclidean Algorithm

The Euclidean algorithm is one of the oldest and most efficient algorithms in mathematics. It is used to find the Greatest Common Divisor (GCD) of two integers.

## The Core Idea

For two integers $a$ and $b$ (where $a > b$), the GCD of $a$ and $b$ is the same as the GCD of $b$ and the remainder of $a$ divided by $b$.

Mathematically:
$$\\text{gcd}(a, b) = \\text{gcd}(b, a \\pmod b)$$

## Example: Finding $\\text{gcd}(252, 105)$

1. $252 = 2 \\times 105 + 42$
2. $105 = 2 \\times 42 + 21$
3. $42 = 2 \\times 21 + 0$

The remainder is now 0, so the GCD is the last non-zero remainder, which is **21**.

## Why it works

The algorithm works because any common divisor of $a$ and $b$ must also divide $a - b$, and by extension, $a \\pmod b$.

## Visualizing the Algorithm

Check out this excellent visualization of the Euclidean algorithm:

[https://www.youtube.com/watch?v=AJn843kplDw](https://www.youtube.com/watch?v=AJn843kplDw)

---
*Stay tuned for more insights into the world of numbers!*
    `
  },
  {
    category: 'Combinatorics',
    title: 'Mastering the Pigeonhole Principle',
    excerpt: 'Beyond the basics, we explore clever applications of the pigeonhole principle to solve seemingly impossible combinatorial problems.',
    date: 'July 2, 2024',
    slug: 'pigeonhole-principle',
    content: `
# Mastering the Pigeonhole Principle

The Pigeonhole Principle (PHP) states a simple truth: if you have $n$ items and $m$ containers, and $n > m$, then at least one container must contain more than one item.

## The Formal Statement

If $n$ items are put into $m$ containers, with $n > m$, then at least one container must contain at least $\\lceil n/m \\rceil$ items.

## A Classic Example

In any group of 13 people, at least two must have been born in the same month. Here, the "items" are the 13 people, and the "containers" are the 12 months.

## Advanced Application: Sums of Integers

Suppose you choose $n+1$ integers from the set $\{1, 2, \\dots, 2n\}$. Prove that at least two of the chosen integers are relatively prime.

**Hint:** Consider the $n$ pairs of consecutive integers $(1, 2), (3, 4), \\dots, (2n-1, 2n)$.

## Video Explanation

Watch this deep dive into the Pigeonhole Principle:

[https://www.youtube.com/watch?v=ROnetLvbm60](https://www.youtube.com/watch?v=ROnetLvbm60)

---
*Combinatorics is the art of counting without counting!*
    `
  },
  {
    category: 'Competition Strategy',
    title: 'Psychology of a Mathlete',
    excerpt: 'Success in Olympiads is not just about knowledge, but also about mental fortitude. Learn strategies to manage time and anxiety during competitions.',
    date: 'June 28, 2024',
    slug: 'psychology-of-a-mathlete',
    content: `
# Psychology of a Mathlete: Staying Calm Under Pressure

Olympiads are as much a test of character as they are of mathematical skill. When the clock is ticking and you're stuck on a problem, your mental state determines your success.

## 1. The 5-Minute Rule

If you haven't made any progress on a problem in 5-10 minutes, move on. You can always come back to it with a fresh perspective.

## 2. Embrace the "Stuck"

Being stuck is where the real learning happens. In a competition, it's a signal to try a different approach:
- Try small cases.
- Look for symmetry.
- Re-read the problem carefully.

## 3. Visualization and Breath

When panic sets in, take three deep breaths. Visualize a problem you solved recently to regain confidence.

## Insightful Video

Here's a great talk on the mindset required for high-level competitions:

[https://www.youtube.com/watch?v=U_85TaXbeIo](https://www.youtube.com/watch?v=U_85TaXbeIo)

---
*Your mind is your most powerful tool. Keep it sharp.*
    `
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Who is eligible for the courses at HuggingMath?',
    answer: 'Our courses are designed for students from grades 6 through 12. The Junior Olympiad Foundation course is for grades 6-8, while the Senior Olympiad Advanced course is for grades 9-12. The IMO Training Camp is by invitation only.'
  },
  {
    question: 'What is the teaching methodology?',
    answer: 'We focus on a problem-solving approach. Our classes are highly interactive, emphasizing deep conceptual understanding and creative thinking over rote memorization. We work through challenging problems and encourage students to explore multiple solution paths.'
  },
  {
    question: 'How are students assessed for admission?',
    answer: 'Prospective students are typically required to take a diagnostic assessment test. This helps us gauge their current mathematical aptitude and place them in the most appropriate program for their skill level.'
  },
  {
    question: 'Do you provide materials for self-study?',
    answer: 'Yes, all enrolled students receive access to our comprehensive library of resources, including lecture notes, problem sets, past papers, and recommended reading lists to supplement their learning.'
  }
];