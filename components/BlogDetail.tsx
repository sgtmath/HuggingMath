
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { BLOG_POSTS_DATA } from '../constants';
import Header from './Header';
import Footer from './Footer';

import 'katex/dist/katex.min.css';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS_DATA.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-ctp-base">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-ctp-text mb-4">Article Not Found</h2>
            <Link to="/" className="text-ctp-mauve hover:underline font-bold">Back to Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Custom renderer for Markdown components to fix hydration errors (div inside p)
  const components = {
    a: ({ href, children }: any) => {
      let videoId = '';
      if (href?.includes('youtube.com/watch?v=')) {
        videoId = href.split('v=')[1]?.split('&')[0];
      } else if (href?.includes('youtu.be/')) {
        videoId = href.split('youtu.be/')[1]?.split('?')[0];
      }

      if (videoId) {
        return (
          <span className="block my-10 aspect-video rounded-3xl overflow-hidden shadow-2xl border border-ctp-surface0 bg-ctp-mantle">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </span>
        );
      }
      return <a href={href} target="_blank" rel="noopener noreferrer" className="text-ctp-mauve font-bold hover:underline">{children}</a>;
    },
    // If a paragraph contains only our YouTube span, we can keep it as is or handle it.
    // However, the simplest fix to avoid div-in-p is to use a span with display: block
    // or to override the p renderer to check for video links.
    // Let's use span with block display for the video container to be safe within p.
  };

  return (
    <div className="min-h-screen flex flex-col bg-ctp-mantle">
      <Header />
      <main className="flex-grow py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/" className="inline-flex items-center text-ctp-mauve hover:text-ctp-pink font-bold mb-10 transition-colors group">
            <div className="bg-ctp-mauve/10 p-2 rounded-lg mr-3 group-hover:bg-ctp-mauve group-hover:text-ctp-base transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            Back to Home
          </Link>
          
          <article className="bg-ctp-base rounded-3xl shadow-xl p-8 md:p-16 border border-ctp-surface0">
            <div className="mb-10">
              <span className="inline-block bg-ctp-sapphire/10 text-ctp-sapphire font-bold px-4 py-1.5 rounded-xl text-sm mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-ctp-text mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-ctp-overlay1 font-medium">{post.date}</p>
            </div>
            
            <div className="markdown-body prose prose-lg prose-ctp max-w-none text-ctp-text">
              <Markdown 
                remarkPlugins={[remarkMath]} 
                rehypePlugins={[rehypeKatex]}
                components={components}
              >
                {post.content}
              </Markdown>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
