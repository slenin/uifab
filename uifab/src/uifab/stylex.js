import styled from 'styled-components';
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
import { themeGet } from '@styled-system/theme-get';

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

const stylex = (component, ...styles) => {
  const styledStyles = [];
  for (let i = 0; i < styles.length; i += 1) {
    styledStyles.push((props) => (typeof styles[i] === 'function' ? styles[i](props, { css, variant, themeGet }) : css(styles[i])));
  }

  return styled(component)(
    ...styledStyles,
    systemStyles,
  );
};

export default stylex;
