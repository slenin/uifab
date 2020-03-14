import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Button from './Button';
import Divider from './Divider';
import { withStyles } from './styles';

function MenuItem(props) {
  const {
    children, className, divider,
    onClick, to, text,
  } = props;
  const content = (
    <Box className={className}>
      {text && text}
      {children && children}
    </Box>
  );

  return (
    <>
      <Button
        format="link"
        textAlign="left"
        width={1}
        onClick={onClick}
        to={to}
      >
        {content}
      </Button>
      {divider && <Divider />}
    </>
  );
}

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  divider: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  text: PropTypes.string,
};

MenuItem.defaultProps = {
  children: null,
  className: null,
  divider: false,
  onClick: null,
  to: null,
  text: null,
};

export default withStyles(MenuItem, {
  color: 'black',
  cursor: 'pointer',
  display: 'block',
  p: 2,
  whiteSpace: 'nowrap',
  '&:hover': {
    bg: 'light',
  },
});
