import { styled } from 'styled-components';

export const Container = styled.section`
  max-width: 100%;
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

  h2 {
    font-size: ${({ theme }) => theme.fonts.size.header.small};
    text-align: center;
  }

  p {
    width: 500px;
    height: 144px;
    font-size: ${({ theme }) => theme.fonts.size.text.large};
    text-align: center;
    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.text.extraSmall};
      width: 350px;
    }
  }
`;

export const WrapperFilosofia = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Filosofia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
