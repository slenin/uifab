import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import stylex from './stylex';

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

export default stylex(Layout, (props, { css, themeGet }) => css({
  color: 'fg',
  bg: 'bg',
  margin: '0 auto',
  minWidth: themeGet('minimumWidth', '0')(props),
}));
