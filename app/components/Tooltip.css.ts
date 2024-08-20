import { globalStyle, style } from '@vanilla-extract/css';
import { sprinkles } from '~/style/sprinkles.css';

export const dialog = style([
  sprinkles({
    backgroundColor: {
      light: 'richBlack',
      dark: 'antiFlashWhite',
    },
    color: {
      light: 'antiFlashWhite',
      dark: 'richBlack',
    },
  }),
  {
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out, background-color 0.2s ease-in-out',
    marginTop: '3rem',
    borderRadius: '16px',
    fontSize: '1rem',
  },
]);

globalStyle(`${dialog}[open]`, {
  marginTop: '-1',
  opacity: 1,
});
