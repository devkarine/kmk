// src/components/BlogList.tsx

import React from 'react';
import { BlogPost as BlogPostType } from './posts';

type BlogListProps = {
  posts: BlogPostType[];
  onSelect: (post: BlogPostType) => void;
};

const BlogList: React.FC<BlogListProps> = ({ posts, onSelect }) => {
  return (
    <>
      <h2>Indice</h2>
      <ul>
        {posts.map(post => (
          <li
            style={{ cursor: 'pointer' }}
            key={post.id}
            onClick={() => onSelect(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
