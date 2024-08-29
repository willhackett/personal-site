import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/style/sprinkles.css';

export const root = style([
  sprinkles({
    fill: {
      light: 'richBlack',
      dark: 'antiFlashWhite',
    },
  }),
  {
    height: '2rem',
    width: '2rem',
  },
]);
