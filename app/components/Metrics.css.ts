import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/style/sprinkles.css';

export const root = style([
  sprinkles({
    flexWrap: {
      mobile: 'wrap',
      desktop: 'nowrap',
    },
  }),
  {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '1rem 3rem',
    marginTop: '4rem',
    marginBottom: '4rem',
  },
]);
