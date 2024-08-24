import styled from 'styled-components';
export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.header.small};
  padding: 50px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const HexagonWrapper = styled.div<{ alternate?: boolean }>`
  width: 250px;
  height: 250px;
  position: relative;
  margin: 2px;
  transform: ${({ alternate }) =>
    alternate ? 'translateY(-30px)' : 'translateY(30px)'};

  @media (max-width: 768px) {
    margin: 15px;
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    margin: 20px;
  }
`;

export const Hexagon = styled.div<{ isFlipped: boolean }>`
  font-size: ${({ theme }) => theme.fonts.size.text.extraSmall};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.text.extraSmall};
  }
`;

export const Side = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  clip-path: polygon(
    25% 6.7%,
    75% 6.7%,
    100% 50%,
    75% 93.3%,
    25% 93.3%,
    0% 50%
  );
`;

export const FrontSide = styled(Side)`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
`;

export const BackSide = styled(Side)`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  transform: rotateY(180deg);
`;
