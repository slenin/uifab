import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import css from '@styled-system/css';
import {
  compose,
  space,
  color,
  layout,
  typography,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  variant,
} from 'styled-system';

const systemStyles = compose(
  space,
  color,
  layout,
  typography,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
);

const withStyles = (component, styles) => styled(component)(
  (props) => (typeof styles === 'function' ? styles(props, { css, variant }) : css(styles)),
  systemStyles,
);

const useTheme = () => useContext(ThemeContext);

export {
  css, styled, useTheme, withStyles,
};
