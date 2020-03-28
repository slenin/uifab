import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import stylex from './stylex';

function Error(props) {
  const {
    className, children, text,
  } = props;
  return (
    <Text className={className}>
      {text && text}
      {children && children}
    </Text>
  );
}

Error.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  text: PropTypes.string,
};

Error.defaultProps = {
  className: null,
  children: null,
  text: null,
};

export default stylex(Error, {
  color: 'error',
  mb: 4,
  mt: 4,
  textAlign: 'center',
});
