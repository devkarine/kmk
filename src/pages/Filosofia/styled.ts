import { styled } from 'styled-components';

export const Container = styled.section`
  max-width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 70px 20px;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    gap: 10px;
  }
`;
