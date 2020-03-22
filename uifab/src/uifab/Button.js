import React from 'react';
import PropTypes from 'prop-types';
import 'focus-visible';

import Box from './Box';
import focusStyle from './focusStyle';
import Icon from './Icon';
import Link from './Link';
import style from './style';

function Button(props) {
  const {
    as, children, className, disabled, loading,
    onClick, target, text, to, type,
  } = props;
  const content = (
    <>
      {children && children}
      {text && text}
    </>
  );

  let element = null;
  if (as === 'button' && !to) {
    element = (
      /* eslint-disable react/button-has-type */
      <button
        className={className}
        type={type}
        disabled={disabled || loading}
        onClick={(e) => onClick && onClick(e)}
      >
        {loading && <Icon icon="spinner" spin />}
        {!loading && content}
      </button>
      /* eslint-enable react/button-has-type */
    );
  } else if (as === 'div' || to) {
    element = (
      <Box
        className={className}
        disabled={disabled || loading}
        onClick={(e) => onClick && onClick(e)}
      >
        {loading && <Icon icon="spinner" spin />}
        {!loading && content}
      </Box>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        target={target}
      >
        {element}
      </Link>
    );
  }

  return element;
}

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  target: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  type: PropTypes.string,
};

Button.defaultProps = {
  as: 'button',
  children: null,
  className: null,
  disabled: false,
  loading: false,
  onClick: null,
  target: '_self',
  text: null,
  to: null,
  type: 'button',
};

const StyledButton = style(Button,
  {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    justifyContent: 'center',
    '&:hover': {
      opacity: 0.8,
    },
    '&:disabled': {
      opacity: 0.8,
    },
  },
  focusStyle,
  (props, { variant }) => (variant({
    prop: 'format',
    variants: {
      contained: {
        bg: props.variant,
        borderColor: props.variant,
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        color: ['accent', 'white', 'light', 'muted', 'border'].includes(props.variant) ? 'black' : 'white',
        px: 3,
        py: 2,
      },
      outlined: {
        bg: 'transparent',
        borderColor: props.variant,
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        color: props.variant,
        px: 3,
        py: 2,
        '&:hover': {
          bg: 'light',
          opacity: 1,
        },
      },
      text: {
        bg: 'transparent',
        borderRadius: 4,
        borderWidth: 0,
        color: props.variant,
        px: 3,
        py: 2,
        '&:hover': {
          bg: 'light',
          opacity: 1,
        },
      },
      link: {
        bg: 'transparent',
        border: 0,
        color: props.variant,
        p: 0,
      },
      custom: {
      },
    },
  })));

StyledButton.defaultProps = {
  format: 'contained',
  variant: 'primary',
};

export default StyledButton;
