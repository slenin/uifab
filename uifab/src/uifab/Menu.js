import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Container from './Container';
import stylex from './stylex';

function Menu(props) {
  const {
    children, className, closeStyle,
    container, onClick, open, openStyle,
    preventDefaultOnClick, style,
  } = props;

  let content = children;
  if (container) {
    content = (
      <Container>
        {content}
      </Container>
    );
  }

  let menuStyle = {};
  if (!open) {
    menuStyle = {
      ...style,
      ...closeStyle,
    };
  }

  if (open) {
    menuStyle = {
      ...style,
      ...openStyle,
    };
  }

  return (
    <Box
      className={className}
      style={menuStyle}
      onClick={(e) => {
        if (preventDefaultOnClick) {
          e.preventDefault();
        }

        if (onClick) {
          onClick(e);
        }
      }}
    >
      {content}
    </Box>
  );
}

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  closeStyle: PropTypes.shape({}),
  container: PropTypes.bool,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  openStyle: PropTypes.shape({}),
  preventDefaultOnClick: PropTypes.bool,
  style: PropTypes.shape({}),
};

Menu.defaultProps = {
  children: null,
  className: null,
  closeStyle: null,
  container: false,
  onClick: null,
  open: false,
  openStyle: null,
  preventDefaultOnClick: true,
  style: null,
};

export default stylex(Menu, {
  bg: 'bg',
  color: 'fg',
  fontSize: 'inherit',
  minWidth: 'auto',
  overflow: 'hidden',
  position: 'absolute',
  zIndex: 1,
});
