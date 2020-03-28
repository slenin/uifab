import Box from './Box';
import stylex from './stylex';

const Container = stylex(Box, (props, { css, themeGet }) => css({
  margin: '0 auto',
  width: themeGet('containerWidths', '100%')(props),
}));

export default Container;
