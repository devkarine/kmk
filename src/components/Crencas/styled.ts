import styled from 'styled-components';
export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.header.small};
  text-align: center;
  padding-top: 50px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentCrencas = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  justify-content: center;
  position: absolute;
  top: 60%;
  gap: 50px;
`;
export const Crencas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
