import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 100px;
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-color: transparent;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px ${({ theme }) => theme.colors.light};

  width: 60px;
  height: 60px;
  border-radius: 50%;

  a {
    font-size: ${({ theme }) => theme.fonts.size.text.large};
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;

    li {
      a {
        font-size: ${({ theme }) => theme.fonts.size.text.small};
        color: ${({ theme }) => theme.colors.light};
        transition: ease-in-out 0.5s;
        border: 2px solid transparent;
        padding: 5px;

        &:hover {
          border: 2px solid #991b1b;
          border-radius: 8px;
        }
      }
    }
  }
`;
