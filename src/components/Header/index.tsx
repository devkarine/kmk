import { Link } from 'react-router-dom';
import * as S from './styled';
import { ModalContent } from '../Modal';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <S.Container>
      <S.Logo>
        <Link to="/home">
          <h1>K</h1>
        </Link>
      </S.Logo>
      {windowWidth > 540 ? (
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
      ) : (
        <ModalContent>
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
        </ModalContent>
      )}
    </S.Container>
  );
};

//TODO colocar nos valores as crencas junto com um guarda-chuva
