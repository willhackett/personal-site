import { style } from '@vanilla-extract/css';
import { sprinkles } from './sprinkles.css';

export const body = style([
  sprinkles({
    backgroundColor: {
      dark: 'richBlack',
      light: 'antiFlashWhite',
    },
    color: {
      dark: 'antiFlashWhite',
      light: 'richBlack',
    },
    fontFamily: 'satoshiRegular',
  }),
]);
