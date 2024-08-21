import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0c0a09',
    secondary: '#a3a3a3',
    light: '#FFFFFF',
    dark: '#000000'
  },

  fonts: {
    family: {
      primary: 'Montserrat'
    },

    size: {
      text: {
        extraSmall: '16px',
        small: '18px',
        medium: '20px',
        large: '24px'
      },
      header: {
        extraSmall: '32px',
        small: '48px',
        medium: '56px',
        large: '62px'
      }
    },
    weight: {
      normal: '400',
      bold: '700'
    }
  }
};
