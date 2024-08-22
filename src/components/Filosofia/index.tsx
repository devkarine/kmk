import { Footer } from '../Footer';
import { Header } from '../Header';
import { Valores } from '../Valores';
import * as S from './styled';

export const Filosofia = () => {
  return (
    <>
      <Header />

      <S.Container>
        <S.WrapperFilosofia>
          <S.Filosofia id="filosofia">
            <h2>MISSÃO</h2>
            <p>
              Produzir moda com qualidade e muito estilo, com o objetivo de
              proporcionar auto estima e elegância a mulher no seu dia a dia.
            </p>
          </S.Filosofia>
          <S.Filosofia>
            <h2>VISÃO</h2>
            <p>
              Destacar-se como referência no mercado da moda e ser objeto de
              desejo de toda mulher foda.
            </p>
          </S.Filosofia>
        </S.WrapperFilosofia>

        <Valores />
      </S.Container>
      <Footer />
    </>
  );
};
