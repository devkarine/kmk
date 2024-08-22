import { styled } from 'styled-components';

export const PostsStyles = styled.div`
  background-color: #000;
  padding: 10px;
  border-radius: 20px;
  font-size: 1rem;
  color: #fee2e2;

  p {
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3,
  h4 {
    color: #991b1b;
  }
`;

export const WrapperBlog = styled.div`
  background-image: url(https://i.pinimg.com/originals/43/f3/62/43f362c814ab7469413286f7361bf732.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
