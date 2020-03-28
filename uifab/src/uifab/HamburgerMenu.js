import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Hamburger from './Hamburger';
import stylex from './stylex';

function HamburgerMenu(props) {
  const {
    animationDuration, children, className, closeStyle, iconColor,
    iconHeight, iconWidth, lineRadius, openStyle, rotate, strokeWidth,
  } = props;
  const [open, setOpen] = useState(false);

  let menuStyle = {};
  if (!open && closeStyle) {
    menuStyle = closeStyle;
  }

  if (open && openStyle) {
    menuStyle = openStyle;
  }

  menuStyle.transition = `${animationDuration}s`;
  return (
    <>
      <Hamburger
        className={className}
        animationDuration={animationDuration}
        lineRadius={lineRadius}
        iconColor={iconColor}
        iconHeight={iconHeight}
        iconWidth={iconWidth}
        rotate={rotate}
        strokeWidth={strokeWidth}
        open={open}
        onClick={() => setOpen(!open)}
      />
      {children && React.cloneElement(children, {
        onClick: () => setOpen(false),
        style: menuStyle,
      })}
    </>
  );
}

HamburgerMenu.propTypes = {
  animationDuration: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  closeStyle: PropTypes.shape({}),
  iconColor: PropTypes.string,
  iconHeight: PropTypes.number,
  iconWidth: PropTypes.number,
  lineRadius: PropTypes.number,
  openStyle: PropTypes.shape({}),
  rotate: PropTypes.number,
  strokeWidth: PropTypes.number,
};

HamburgerMenu.defaultProps = {
  animationDuration: 0.4,
  className: null,
  children: null,
  closeStyle: null,
  iconColor: 'black',
  iconHeight: 14,
  iconWidth: 20,
  lineRadius: 16,
  openStyle: null,
  rotate: 0,
  strokeWidth: 2,
};

export default stylex(HamburgerMenu);
