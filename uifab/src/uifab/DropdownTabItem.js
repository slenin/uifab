import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import TabItem from './TabItem';
import stylex from './stylex';

function DropdownTabItem(props) {
  const {
    alignRight, className, icon, menu, menuContent,
    onClick, text,
  } = props;
  return (
    <Dropdown
      height="100%"
      width="100%"
      toggle={(
        <TabItem
          className={className}
          icon={icon}
          text={text}
          onClick={onClick}
        />
      )}
      menu={menu}
      menuContent={menuContent}
      alignRight={alignRight}
    />
  );
}

DropdownTabItem.propTypes = {
  alignRight: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  menu: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  menuContent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  text: PropTypes.string,
};

DropdownTabItem.defaultProps = {
  alignRight: false,
  className: null,
  icon: null,
  menu: null,
  menuContent: null,
  onClick: null,
  text: null,
};

export default stylex(DropdownTabItem, {
  color: 'inherit',
});
