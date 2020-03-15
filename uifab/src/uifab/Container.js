import Box from './Box';
import style from './style';

const Container = style(Box, (props, { css, themeGet }) => css({
  margin: '0 auto',
  width: themeGet('containerWidths', '100%')(props),
}));

export default Container;
