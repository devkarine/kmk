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
          transformar o impossível em realidade.
          <br />
          Nossa dedicação e criatividade nos impulsionam a superar limites e a
          alcançar resultados excepcionais, mostrando que a verdadeira força
          está na união e no esforço coletivo.
        </p>

        <S.Img>
          <img src="/assets/time.jpg" alt="foto do time" />
          <img src="/assets/time1.jpg" alt="foto do time" />
          <img src="/assets/time2.jpg" alt="foto do time" />
          <img src="/assets/time3.jpg" alt="foto do time" />
          <img src="/assets/time7.jpg" alt="foto do time" />
          <img src="/assets/time8.jpg" alt="foto do time" />
          <img src="/assets/time4.jpg" alt="foto do time" />
          <img src="/assets/time5.jpg" alt="foto do time" />
          <img src="/assets/time6.jpg" alt="foto do time" />
          <img src="/assets/time9.jpg" alt="foto do time" />
        </S.Img>
      </S.Container>
      <Footer />
    </div>
  );
};
