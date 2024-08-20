import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const links = style({
  display: 'flex',
  gap: '1rem',
});

export const a = style({
  color: 'inherit',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});
