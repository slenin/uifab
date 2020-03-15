import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Flex from './Flex';
import Icon from './Icon';
import IconButton from './IconButton';
import style from './style';

function FormError(props) {
  const {
    className, message, onClose,
  } = props;
  return message && (
    <Flex
      className={className}
      alignItems="center"
    >
      <Icon
        mr={2}
        icon="exclamation-circle"
      />
      <Box flexGrow={1}>
        {message}
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
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  onClose: PropTypes.func,
};

FormError.defaultProps = {
  className: null,
  message: null,
  onClose: null,
};

export default style(FormError, {
  p: 2,
  bg: 'error',
  borderRadius: 4,
  color: 'white',
});
