import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import { withStyles } from './styles';

function Error(props) {
  const {
    className, children, error,
  } = props;
  return (
    <Text className={className}>
      {error && error}
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
  error: PropTypes.string,
};

Error.defaultProps = {
  className: null,
  children: null,
  error: null,
};

export default withStyles(Error, {
  color: 'error',
  mb: 4,
  mt: 4,
  textAlign: 'center',
});
