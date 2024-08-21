import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.dark};
`;
