import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from 'use-onclickoutside';

import Box from './Box';
import style from './style';
import useKeyPress from './useKeyPress';

const Wrapper = style(Box, {
  height: '100%',
  position: 'relative',
});

const Toggle = React.forwardRef((props, ref) => (
  <Box
    height="100%"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      if (props.onClick) {
        props.onClick(e);
      }
    }}
  >
    {props.children}
  </Box>
));

Toggle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
};

Toggle.defaultProps = {
  children: null,
  onClick: null,
};

const Menu = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    className={props.className}
    bg="white"
    borderColor="border"
    borderRadius={4}
    borderStyle="solid"
    borderWidth={1}
    boxShadow="0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.2)"
    display={props.open ? 'block' : 'none'}
    fontSize="inherit"
    minWidth="auto"
    overflow="hidden"
    position="absolute"
    top="100%"
    zIndex={1000}
    onClick={(e) => {
      if (!props.closeOnClick) {
        e.preventDefault();
      }

      if (props.onClick) {
        props.onClick(e);
      }
    }}
  >
    {props.children}
  </Box>
));

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  closeOnClick: PropTypes.bool,
  onClick: PropTypes.func,
  open: PropTypes.bool,
};

Menu.defaultProps = {
  children: null,
  className: null,
  closeOnClick: false,
  onClick: null,
  open: false,
};

function Dropdown(props) {
  const {
    className, closeOnClick, menu, toggle,
  } = props;
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  const escapePressed = useKeyPress('Escape');
  if (escapePressed && open) {
    setOpen(false);
  }

  return (
    <Wrapper
      ref={ref}
    >
      <Toggle onClick={() => setOpen(!open)}>
        {toggle}
      </Toggle>
      <Menu
        className={className}
        open={open}
        onClick={() => closeOnClick && setOpen(false)}
      >
        {menu}
      </Menu>
    </Wrapper>
  );
}

Dropdown.propTypes = {
  className: PropTypes.string,
  closeOnClick: PropTypes.bool,
  menu: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  toggle: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Dropdown.defaultProps = {
  className: null,
  closeOnClick: true,
  menu: null,
  toggle: null,
};

export default style(Dropdown);
