import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';
import ToggleMenu from './ToggleMenu';
import stylex from './stylex';

function Dropdown(props) {
  const {
    alignRight, className, closeOnClick, closeOnOutsideClick,
    menu, menuContent, menuStyle, preventDefaultOnClick, toggle,
  } = props;

  let toggleMenu = menu;
  if (!menu) {
    toggleMenu = (
      <Menu
        right={alignRight ? 0 : 'auto'}
        borderColor="border"
        borderRadius={4}
        borderStyle="solid"
        borderWidth={1}
        boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.2)"
        top="100%"
        closeStyle={{ display: 'none' }}
        style={menuStyle}
        preventDefaultOnClick={preventDefaultOnClick}
      >
        {menuContent}
      </Menu>
    );
  }

  return (
    <ToggleMenu
      className={className}
      display="inline-flex"
      toggle={toggle}
      menu={toggleMenu}
      closeOnClick={closeOnClick}
      closeOnOutsideClick={closeOnOutsideClick}
    />
  );
}

Dropdown.propTypes = {
  alignRight: PropTypes.bool,
  className: PropTypes.string,
  closeOnClick: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  menu: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  menuContent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  menuStyle: PropTypes.shape({}),
  preventDefaultOnClick: PropTypes.bool,
  toggle: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Dropdown.defaultProps = {
  alignRight: false,
  className: null,
  closeOnClick: true,
  closeOnOutsideClick: true,
  menu: null,
  menuContent: null,
  menuStyle: null,
  preventDefaultOnClick: true,
  toggle: null,
};

export default stylex(Dropdown);
