import React from 'react';
import PropTypes from 'prop-types';

import style from './style';

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
  text: PropTypes.string,
};

Text.defaultProps = {
  children: null,
  className: null,
  text: null,
};

export default style(Text);
