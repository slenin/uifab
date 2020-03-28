import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Flex from './Flex';
import Icon from './Icon';
import IconButton from './IconButton';
import stylex from './stylex';

function FormError(props) {
  const {
    className, children, onClose, text,
  } = props;
  return (children || text) && (
    <Flex
      className={className}
      alignItems="center"
    >
      <Icon
        mr={2}
        icon="exclamation-circle"
      />
      <Box flexGrow={1}>
        {text && text}
        {children && children}
      </Box>
      <IconButton
        ml={2}
        icon="window-close"
        onClick={() => onClose && onClose()}
      />
    </Flex>
  );
}

FormError.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClose: PropTypes.func,
  text: PropTypes.string,
};

FormError.defaultProps = {
  className: null,
  children: null,
  onClose: null,
  text: null,
};

export default stylex(FormError, {
  p: 2,
  bg: 'error',
  borderRadius: 4,
  color: 'white',
});
