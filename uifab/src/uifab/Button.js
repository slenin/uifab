import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Icon from './Icon';
import { withStyles } from './styles';

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
  if (as === 'button') {
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
  } else if (as === 'div') {
    element = (
      <div className={className}>
        {content}
      </div>
    );
  }

  if (to) {
    return (
      <Link to={to} target={target}>
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
  text: PropTypes.string,
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

const StyledButton = withStyles(Button,
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
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        px: 3,
        py: 2,
        '&:hover': {
          opacity: 0.8,
        },
        '&:disabled': {
          opacity: 0.8,
        },
      },
      outlined: {
        bg: 'transparent',
        borderColor: props.variant,
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        color: props.variant,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        px: 3,
        py: 2,
        '&:hover': {
          bg: 'light',
        },
        '&:disabled': {
          bg: 'transparent',
          opacity: 0.8,
        },
      },
      text: {
        bg: 'transparent',
        borderRadius: 4,
        borderWidth: 0,
        color: props.variant,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        px: 3,
        py: 2,
        '&:hover': {
          bg: 'light',
        },
        '&:disabled': {
          bg: 'transparent',
          opacity: 0.8,
        },
      },
      link: {
        bg: 'transparent',
        border: 0,
        color: props.variant,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        p: 0,
        '&:hover': {
          color: 'inherit',
        },
        '&:disabled': {
          opacity: 0.8,
        },
      },
      custom: {
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        '&:hover': {
          opacity: 0.8,
        },
        '&:disabled': {
          opacity: 0.8,
        },
      },
    },
  })));

StyledButton.defaultProps = {
  format: 'contained',
  variant: 'primary',
};

export default StyledButton;
