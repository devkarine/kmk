import styled from 'styled-components';

export const TextTypeWriter = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-size: ${({ theme }) => theme.fonts.size.header.large};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.header.medium};
  }

  @media (max-width: 632px) {
    font-size: ${({ theme }) => theme.fonts.size.header.extraSmall};
  }
`;
