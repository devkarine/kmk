import { Typewriter } from '../TypeWriter';
import * as S from './styled';

export const Hero = () => {
  return (
    <S.Container>
      <Typewriter text="NÓS SOMOS KIMIKA" speed={500} />
    </S.Container>
  );
};
