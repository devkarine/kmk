import { Link } from 'react-router-dom';
import * as S from './styled';

export const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <Link to="/home">
          <h1>K</h1>
        </Link>
      </S.Logo>
      <S.Nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/filosofia">Filosofia</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="/quemsomos">Quem Somos</Link>
          </li>
        </ul>
      </S.Nav>
    </S.Container>
  );
};

//TODO colocar nos valores as crencas junto com um guarda-chuva
