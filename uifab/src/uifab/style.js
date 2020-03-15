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

const style = (component, styles) => styled(component)(
  (props) => (typeof styles === 'function' ? styles(props, { css, variant, themeGet }) : css(styles)),
  systemStyles,
);

export default style;
