import { Header } from '../../components/Header';
import React, { useState } from 'react';
import { posts, BlogPost as BlogPostType } from './components/posts';
import BlogPost from './components/BlogPost';
import BlogList from './components/BlogList';
import { Hero } from '../../components/Hero';
import { Footer } from '../../components/Footer';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <aside style={{ width: '15%', padding: '20px' }}>
          <BlogList posts={posts} onSelect={setSelectedPost} />
        </aside>
        <main style={{ width: '85%', padding: '20px' }}>
          {selectedPost ? <BlogPost post={selectedPost} /> : <Hero />}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
