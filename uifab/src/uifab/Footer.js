import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Container from './Container';
import style from './style';

function Footer(props) {
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

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  container: PropTypes.bool,
};

Footer.defaultProps = {
  className: null,
  children: null,
  container: true,
};

export default style(Footer, {
  borderTopColor: 'border',
  borderTopStyle: 'solid',
  borderTopWidth: 1,
  minWidth: 'inherit',
  width: '100%',
});
