import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const Recorte = styled.section`
  max-width: 100%;
  height: 250px;
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
`;
