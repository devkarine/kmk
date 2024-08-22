import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Reinicia a animação
      const resetTimeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, speed);

      return () => clearTimeout(resetTimeout);
    }
  }, [index, text, speed]);

  return displayedText;
};
