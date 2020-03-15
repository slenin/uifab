import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import style from './style';

function Layout(props) {
  const {
    className, children,
  } = props;

  return (
    <Box className={className}>
      {children}
    </Box>
  );
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Layout.defaultProps = {
  className: null,
  children: null,
};

export default style(Layout, (props, { css, themeGet }) => css({
  margin: '0 auto',
  minWidth: themeGet('minimumWidth', '0')(props),
}));
