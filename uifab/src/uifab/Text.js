import React from 'react';
import PropTypes from 'prop-types';

import stylex from './stylex';

function Text(props) {
  const {
    children, className, text,
  } = props;

  return (
    <div className={className}>
      {text && text}
      {children && children}
    </div>
  );
}

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Text.defaultProps = {
  children: null,
  className: null,
  text: null,
};

export default stylex(Text);
