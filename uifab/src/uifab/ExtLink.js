import React from 'react';
import PropTypes from 'prop-types';

import focusStyle from './focusStyle';
import style from './style';

function ExtLink(props) {
  const {
    children, className, text, to, ...otherProps
  } = props;
  return (
    <>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <a className={className} href={to} {...otherProps}>
        {text && text}
        {children && children}
      </a>
      {/* eslint-enable react/jsx-props-no-spreading */}
    </>
  );
}

ExtLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  to: PropTypes.string,
};

ExtLink.defaultProps = {
  children: null,
  className: null,
  text: null,
  to: null,
};

export default style(ExtLink,
  {
    color: 'primary',
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.8,
    },
  },
  focusStyle);
