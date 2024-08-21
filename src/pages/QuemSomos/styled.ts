import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 25px;

  p {
    text-align: center;
    max-width: 900px;
  }
`;

export const Img = styled.div`
  border-radius: 30px;
  max-width: 600px;
  padding-bottom: 20px;

  img {
    width: 100%;
    border-radius: 30px;
  }
`;
