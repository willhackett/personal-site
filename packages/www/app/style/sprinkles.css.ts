import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import * as fontFamily from './fonts.css';
import { theme } from './index.css';

const space = {
  auto: 'auto',
  none: 0,
  small: '0.25rem',
  medium: '0.5rem',
  large: '1rem',
};

const fontWeight = {
  light: 300,
  regular: 400,
  bold: 700,
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    fontFamily,
    fontWeight,
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    margin: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    padding: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    flexWrap: ['wrap', 'nowrap'],
    // etc.
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

const colorProperties = defineProperties({
  conditions: {
    light: {},
    dark: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'light',
  properties: {
    color: theme.color,
    backgroundColor: theme.color,
    fill: theme.color,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
