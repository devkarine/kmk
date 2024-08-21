import 'styled-components';

type FontSize = {
  extraSmall: string;
  small: string;
  medium: string;
  large: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
    };

    fonts: {
      family: {
        primary: string;
      };
      size: {
        text: FontSize;
        header: FontSize;
      };
      weight: {
        normal: string;
        bold: string;
      };
    };
  }
}
