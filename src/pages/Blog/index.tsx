import { Header } from '../../components/Header';
import React, { useState } from 'react';
import { posts, BlogPost as BlogPostType } from './components/posts';
import BlogPost from './components/BlogPost';
import BlogList from './components/BlogList';
import { Hero } from '../../components/Hero';
import { Footer } from '../../components/Footer';
import * as S from './styled';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(
    posts[0]
  );

  return (
    <>
      <Header />
      <S.WrapperBlog>
        <S.Aside >
          <BlogList posts={posts} onSelect={setSelectedPost} />
        </S.Aside>
        <main style={{ width: '80%', padding: '20px' }}>
          {selectedPost ? <BlogPost post={selectedPost} /> : <Hero />}
        </main>
      </S.WrapperBlog>
      <Footer />
    </>
  );
};

export default Blog;
