import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';

import * as S from './styled';

export const Home = () => {
  return (
    <S.Container>
      <Header />
      <Hero />
      <S.Recorte></S.Recorte>
    </S.Container>
  );
};
