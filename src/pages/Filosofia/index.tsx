import { Crenca } from '../../components/Crencas';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Missao } from '../../components/Missão';
import { Valores } from '../../components/Valores';
import * as S from './styled';

export const Filosofia = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Missao />
        <Valores />
        <Crenca />
      </S.Container>
      <Footer />
    </>
  );
};
