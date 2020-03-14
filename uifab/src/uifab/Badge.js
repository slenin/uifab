import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import { withStyles } from './styles';

function Badge(props) {
  const {
    className, text,
  } = props;

  return (
    <Text
      className={className}
      value={text}
    />
  );
}

Badge.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

Badge.defaultProps = {
  className: null,
  text: null,
};

export default withStyles(Badge, {
  borderRadius: 4,
  bg: 'error',
  color: 'white',
  fontSize: '0.75em',
  pl: 1,
  pr: 1,
});
