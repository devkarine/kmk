// src/components/BlogPost.tsx
import React from 'react';
import { BlogPost as BlogPostType } from './posts';
import * as S from '../styled';

type BlogPostProps = {
  post: BlogPostType;
};

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        <time>{post.date}</time>
      </p>
      <small>Por {post.author}</small>
      <S.PostsStyles dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
