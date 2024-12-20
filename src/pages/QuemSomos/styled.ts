import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 30px;

  padding-bottom: 20px;
  gap: 30px;
  flex: 1;

  img {
    max-width: 40%;
    height: 60%;
    border-radius: 20px;
    box-shadow: 2px 3px 13px -5px #ffffff;
  }
`;
