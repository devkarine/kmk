import { useState } from 'react';
import * as S from './styled';

const hexagons = [
  { title: 'RESPEITO', phrase: 'Foco nas pessoas' },
  { title: 'CONFIANÇA', phrase: 'Ética e honestidade' },
  { title: 'EMPREENDEDORISMO', phrase: 'Coragem e inovação' },
  { title: 'UNIÃO', phrase: 'Resultados extraordinários' },
  { title: 'COMPROMETIMENTO', phrase: 'Exceder expectativas' }
];

export const Valores = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div>
      <S.Title>VALORES</S.Title>
      <S.Container>
        {hexagons.map((hex, index) => (
          <S.HexagonWrapper
            key={index}
            alternate={index % 2 === 1}
            onClick={() => handleClick(index)}
          >
            <S.Hexagon isFlipped={flippedIndex === index}>
              <S.FrontSide>
                <h3>{hex.title}</h3>
              </S.FrontSide>
              <S.BackSide>
                <h3>{hex.phrase}</h3>
              </S.BackSide>
            </S.Hexagon>
          </S.HexagonWrapper>
        ))}
      </S.Container>
    </div>
  );
};
