import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/style/sprinkles.css';

export const container = style({
  marginTop: '3rem',
});

export const introContainer = style({
  marginTop: '2.75rem',
  marginBottom: '2.75rem',
});

export const introHeading = style([
  sprinkles({
    fontFamily: 'satoshiBold',
  }),
  {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
  },
]);
