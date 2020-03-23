import React from 'react';
import PropTypes from 'prop-types';

import style from './style';

function Label(props) {
  const {
    children, className, htmlFor, text, ...otherProps
  } = props;
  return (
    <>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <label className={className} htmlFor={htmlFor} {...otherProps}>
        {text && text}
        {children && children}
      </label>
      {/* eslint-enable react/jsx-props-no-spreading */}
    </>
  );
}

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Label.defaultProps = {
  children: null,
  className: null,
  htmlFor: null,
  text: null,
};

export default style(Label, {
  color: 'muted',
  fontSize: '0.875em',
  mb: 1,
});
