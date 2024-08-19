import { createGlobalTheme, style } from '@vanilla-extract/css';
import { satoshiLight } from './fonts.css';

export const root = style({
  fontFamily: 'sans-serif',
  padding: '1rem',
});

export const theme = createGlobalTheme(':root', {
  color: {
    antiFlashWhite: '#edf2f4ff',
    richBlack: '#011627ff',
    redPantone: '#e71d36ff',
    emerald: '#26c485ff',
    saffron: '#e3b505ff',
    dodgerBlue: '#2191fbff',
  },
  fontFace: {
    light: {
      family: satoshiLight,
      weight: 'normal',
    },
  },
});
