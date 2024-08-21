import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50): string => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;

    const typingInterval = setInterval(() => {
      setDisplayText(() => {
        const newText = text.slice(0, i + 1);
        i++;
        if (i >= text.length) {
          clearInterval(typingInterval);
        }
        return newText;
      });
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};
