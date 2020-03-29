import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Divider from './Divider';
import stylex from './stylex';

function MenuItem(props) {
  const {
    children, className, divider,
    onClick, to, text,
  } = props;

  return (
    <>
      <Button
        className={className}
        format="text"
        onClick={onClick}
        to={to}
      >
        {text && text}
        {children && children}
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

export default stylex(MenuItem, {
  borderRadius: 0,
  color: 'fg',
  display: 'block',
  p: 2,
  textAlign: 'left',
  whiteSpace: 'nowrap',
  width: '100%',
});
