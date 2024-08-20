import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/style/sprinkles.css';

export const root = style({
  marginTop: '4rem',
  marginBottom: '4rem',
});

export const heading = style([
  sprinkles({
    fontFamily: 'satoshiBold',
  }),
  {
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
  },
]);
