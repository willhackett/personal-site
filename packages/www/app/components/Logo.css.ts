import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/style/sprinkles.css';

export const root = sprinkles({
  fontFamily: 'satoshiBold',
  marginTop: 'large',
  marginBottom: 'large',
});

export const dot = sprinkles({
  color: 'emerald',
});

export const a = style({
  color: 'inherit',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});
