import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Container from './Container';
import stylex from './stylex';

function Menu(props) {
  const {
    children, className, closeOnClick,
    container, onClick, style,
  } = props;

  let content = children;
  if (container) {
    content = (
      <Container>
        {content}
      </Container>
    );
  }

  return (
    <Box
      className={className}
      style={style}
      onClick={(e) => {
        if (!closeOnClick) {
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
  closeOnClick: PropTypes.bool,
  container: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.shape({}),
};

Menu.defaultProps = {
  children: null,
  className: null,
  closeOnClick: false,
  container: false,
  onClick: null,
  style: null,
};

export default stylex(Menu, {
  bg: 'white',
  fontSize: 'inherit',
  minWidth: 'auto',
  overflow: 'hidden',
  position: 'absolute',
  zIndex: 1,
});
