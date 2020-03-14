import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from './styles';

function Text(props) {
  const {
    children, className, value,
  } = props;

  return (
    <div className={className}>
      {value && value}
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
  value: PropTypes.string,
};

Text.defaultProps = {
  children: null,
  className: null,
  value: null,
};

export default withStyles(Text);
