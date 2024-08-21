import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import * as S from './styled';

export const QuemSomos = () => {
  return (
    <div>
      <Header />

      <S.Container>
        <h1>Quem Somos nós?</h1>

        <p>
          Somos o Time Vermelho, uma equipe unida que se formou durante uma
          competição desafiadora. Ao longo dessa jornada, tivemos a oportunidade
          de demonstrar nossos valores fundamentais, nossa missão e visão.
          <br />
          Estamos comprometidos em inovar em cada apresentação, sempre buscando
          transformar o impossível em possível.
          <br />
          Nossa dedicação e criatividade nos impulsionam a superar limites e a
          alcançar resultados excepcionais, mostrando que a verdadeira força
          está na união e no esforço coletivo.
        </p>

        <S.Img>
          <img src="/assets/time.jpg" alt="foto do time" />
        </S.Img>
      </S.Container>
      <Footer />
    </div>
  );
};