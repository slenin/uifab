import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Container from './Container';
import stylex from './stylex';

function Content(props) {
  const {
    className, children, container,
  } = props;

  let content = children;
  if (container) {
    content = (
      <Container>
        {content}
      </Container>
    );
  }

  return (
    <Box className={className}>
      {content}
    </Box>
  );
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  container: PropTypes.bool,
};

Content.defaultProps = {
  className: null,
  children: null,
  container: true,
};

export default stylex(Content, {
  minHeight: '100vh',
  minWidth: 'inherit',
  width: '100%',
});
