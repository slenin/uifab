import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import TabItem from './TabItem';
import stylex from './stylex';

function DropdownTabItem(props) {
  const {
    alignRight, className, icon, menu,
    onClick, text,
  } = props;
  return (
    <Dropdown
      right={alignRight ? 0 : 'auto'}
      toggle={(
        <TabItem
          className={className}
          icon={icon}
          text={text}
          onClick={onClick}
        />
      )}
      menu={menu}
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
  onClick: PropTypes.func,
  text: PropTypes.string,
};

DropdownTabItem.defaultProps = {
  alignRight: false,
  className: null,
  icon: null,
  menu: null,
  onClick: null,
  text: null,
};

export default stylex(DropdownTabItem, {
  color: 'inherit',
});
