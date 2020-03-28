import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from 'use-onclickoutside';

import Flex from './Flex';
import stylex from './stylex';
import useKeyPress from './useKeyPress';

function ToggleMenu(props) {
  const {
    className, closeOnClick, closeOnOutsideClick,
    menu, toggle,
  } = props;
  const [open, setOpen] = useState(false);

  const ref = useRef(null);
  useOnClickOutside(ref, () => closeOnOutsideClick && setOpen(false));

  const escapePressed = useKeyPress('Escape');
  if (escapePressed && open) {
    setOpen(false);
  }

  return (
    <Flex
      ref={ref}
      className={className}
      display="inline-flex"
    >
      {toggle && React.cloneElement(toggle, {
        onClick: () => setOpen(!open),
        open,
      })}
      {menu && React.cloneElement(menu, {
        onClick: () => closeOnClick && setOpen(false),
        open,
      })}
    </Flex>
  );
}

ToggleMenu.propTypes = {
  className: PropTypes.string,
  closeOnClick: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  menu: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  toggle: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ToggleMenu.defaultProps = {
  className: null,
  closeOnClick: true,
  closeOnOutsideClick: true,
  menu: null,
  toggle: null,
};

export default stylex(ToggleMenu);
