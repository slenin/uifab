import React from 'react';
import PropTypes from 'prop-types';

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

  if (as === 'button' && !to) {
    return (
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
  }

  if (as === 'div' && !to) {
    return (
      <Box
        className={className}
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
        className={className}
        onClick={(e) => onClick && onClick(e)}
        to={to}
        target={target}
        style={{ pointerEvents: disabled || loading ? 'none' : 'auto' }}
      >
        {loading && <Icon icon="spinner" spin />}
        {!loading && content}
      </Link>
    );
  }

  return null;
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
        justifyContent: 'flex-start',
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
