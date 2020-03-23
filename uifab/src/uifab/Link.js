import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import focusStyle from './focusStyle';
import style from './style';

function Link(props) {
  const {
    children, className, text, ...otherProps
  } = props;
  return (
    <>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <RouterLink className={className} {...otherProps}>
        {text && text}
        {children && children}
      </RouterLink>
      {/* eslint-enable react/jsx-props-no-spreading */}
    </>
  );
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Link.defaultProps = {
  children: null,
  className: null,
  text: null,
};

export default style(Link,
  {
    color: 'primary',
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.8,
    },
  },
  focusStyle);
