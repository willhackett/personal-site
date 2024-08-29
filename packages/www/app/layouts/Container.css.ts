import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/style/sprinkles.css';

export const root = style([
  sprinkles({
    margin: {
      desktop: 'auto',
      mobile: 'xlarge',
      tablet: 'medium',
    },
  }),
  {
    maxWidth: '60rem',
  },
]);
