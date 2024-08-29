import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/style/sprinkles.css';

export const root = style({
  marginTop: '2rem',
  marginBottom: '2rem',
});

export const a = style({
  textDecoration: 'none',
  color: 'inherit',
});

export const title = style([
  sprinkles({
    color: {
      dark: 'antiFlashWhite',
      light: 'richBlack',
    },
    fontFamily: 'satoshiBold',
  }),
  {
    marginBottom: '0.25rem',
  },
]);

export const time = style([
  sprinkles({
    color: {
      dark: 'antiFlashWhite',
      light: 'richBlack',
    },
    fontFamily: 'satoshiLight',
  }),
  {
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
]);
