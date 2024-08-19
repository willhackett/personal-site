import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/style/sprinkles.css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});

export const text = style([
  sprinkles({
    fontFamily: 'satoshiBlack',
  }),
  {
    fontSize: '1rem',
  },
]);
