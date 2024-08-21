import { useTypewriter } from '../Utils';
import * as S from './styled';

interface TypewriterProps {
  text: string;
  speed?: number;
}

export const Typewriter = ({ text, speed = 50 }: TypewriterProps) => {
  const displayText = useTypewriter(text, speed);

  return <S.TextTypeWriter>{displayText}</S.TextTypeWriter>;
};
