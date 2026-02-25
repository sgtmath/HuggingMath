
import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';
import { BLOG_POSTS_DATA } from '../constants';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link to={`/blog/${post.slug}`} className="bg-ctp-base rounded-2xl shadow-sm border border-ctp-surface0 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group hover:shadow-xl">
    <div className="p-8 flex flex-col flex-grow">
      <div>
        <span className="inline-block bg-ctp-sapphire/10 text-ctp-sapphire font-semibold px-4 py-1.5 rounded-xl text-sm mb-5">
          {post.category}
        </span>
      </div>
      <h3 className="text-xl font-bold font-serif text-ctp-text mb-4 group-hover:text-ctp-sapphire transition-colors duration-300 leading-snug">{post.title}</h3>
      <p className="text-ctp-subtext0 mb-6 flex-grow leading-relaxed">{post.excerpt}</p>
      <div className="mt-auto pt-6 border-t border-ctp-surface0 flex justify-between items-center">
        <span className="text-sm text-ctp-overlay1 font-medium">{post.date}</span>
        <span className="font-bold text-ctp-sapphire hover:text-ctp-blue transition-colors flex items-center group/link">
          Read More 
          <span className="ml-1 transform group-hover/link:translate-x-1 transition-transform">&rarr;</span>
        </span>
      </div>
    </div>
  </Link>
);


const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-ctp-mantle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ctp-text">From Our Blog</h2>
          <div className="w-20 h-1.5 bg-ctp-sapphire mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-ctp-subtext0 max-w-2xl mx-auto">
            Insights, strategies, and stories from the world of competitive mathematics.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS_DATA.map((post) => (
            <BlogPostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
