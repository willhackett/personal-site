import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/style/sprinkles.css';

export const root = style([
  sprinkles({
    margin: 'auto',
  }),
  {
    maxWidth: '60rem',
  },
]);
