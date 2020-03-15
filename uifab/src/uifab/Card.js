import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Flex from './Flex';
import style from './style';

function Card(props) {
  const {
    action, children, className, tag, title,
  } = props;
  return (
    <Box className={className}>
      {tag && tag}
      {(title || action) && (
        <Flex alignItems="start" justifyContent="space-between">
          <Box>
            {title && title}
          </Box>
          <Box>
            {action && action}
          </Box>
        </Flex>
      )}
      {children && children}
    </Box>
  );
}

Card.propTypes = {
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Card.defaultProps = {
  action: null,
  className: null,
  children: null,
  tag: null,
  title: null,
};

export default style(Card, {
  borderWidth: 1,
  borderColor: 'border',
  borderStyle: 'solid',
  borderRadius: 4,
  p: 3,
});
