import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/style/sprinkles.css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});

export const title = style([
  sprinkles({
    fontFamily: 'satoshiBold',
  }),
  {
    fontSize: '1.5rem',
  },
]);

export const artist = style({
  fontSize: '1rem',
});
