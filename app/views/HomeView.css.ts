import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/style/sprinkles.css';

export const container = style({
  marginTop: '3rem',
});

export const introContainer = style({
  marginTop: '4rem',
  marginBottom: '4rem',
});

export const introHeading = style([
  sprinkles({
    fontFamily: 'satoshiBold',
  }),
  {
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
  },
]);
