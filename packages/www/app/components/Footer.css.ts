import { style } from '@vanilla-extract/css';

export const root = style({
  marginTop: '4rem',
  marginBottom: '4rem',
  display: 'flex',
  justifyContent: 'space-between',
});

export const a = style({
  color: 'inherit',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});
