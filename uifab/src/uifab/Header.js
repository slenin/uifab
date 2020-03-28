import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Flex from './Flex';
import stylex from './stylex';

function Header(props) {
  const {
    className, children, container,
    left, menu, right,
  } = props;

  let content = null;
  if (left || right) {
    content = (
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        {left}
        {right}
      </Flex>
    );
  }

  content = content || children;

  if (container) {
    content = (
      <Container>
        {content}
      </Container>
    );
  }

  return (
    <Flex className={className}>
      {content}
    </Flex>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  container: PropTypes.bool,
  left: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  menu: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  right: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Header.defaultProps = {
  className: null,
  children: null,
  container: true,
  left: null,
  menu: null,
  right: null,
};

export default stylex(Header, {
  alignItems: 'center',
  borderBottomColor: 'border',
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  bg: 'white',
  minWidth: 'inherit',
  position: 'fixed',
  height: '3rem',
  overflowX: 'auto',
  top: 0,
  width: '100%',
  zIndex: 1,
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
