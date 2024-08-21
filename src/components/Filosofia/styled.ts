import { styled } from 'styled-components';

export const Container = styled.section`
  max-width: 100%;
  height: 500px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  clip-path: polygon(
    0 0,
    0 36%,
    0 69%,
    0 100%,
    20% 100%,
    48% 100%,
    80% 100%,
    100% 100%,
    100% 48%,
    100% 27%,
    68% 0,
    40% 31%
  );

  h2 {
    font-size: ${({ theme }) => theme.fonts.size.header.small};
    padding: 150px 0 50px 0;
    text-align: center;
  }

  p {
    width: 500px;
    font-size: ${({ theme }) => theme.fonts.size.text.large};
    text-align: center;
  }
`;

export const Filosofia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  padding-top: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
