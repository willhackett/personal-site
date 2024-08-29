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
    fontSize: '1rem',
    textWrap: 'nowrap',
    overflowX: 'hidden',
    maxWidth: '100%',
  },
]);

export const artist = style({
  fontSize: '0.8rem',
});
