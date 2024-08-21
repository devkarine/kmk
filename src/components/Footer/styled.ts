import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: 100%;
  height: 70px;

  padding: 10px;
  font-size: 10px;

  img {
    width: 70px;
    filter: invert();
  }
`;