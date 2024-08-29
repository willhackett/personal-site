import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  cursor: 'pointer',
});

export const icon = style({
  flex: '0 0 auto',
});

export const metric = style({
  flex: '1 1 auto',
});
