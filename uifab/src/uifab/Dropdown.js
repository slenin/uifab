import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown as ReactDropdown } from 'react-bootstrap';

import Box from './Box';
import style from './style';

const Toggle = React.forwardRef((props, ref) => (
  <Box
    height="100%"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      props.onClick(e);
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
    m={0}
    p={0}
    borderColor="muted"
    borderRadius={4}
    borderWidth={1}
    fontSize="inherit"
    boxShadow="0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.2)"
    overflow="hidden"
    minWidth="auto"
    onClick={(e) => {
      e.preventDefault();
      props.onClick(e);
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
  onClick: PropTypes.func,
};

Menu.defaultProps = {
  children: null,
  className: null,
  onClick: null,
};

function Dropdown(props) {
  const {
    alignRight, className, menu, toggle,
  } = props;
  const [active, setActive] = useState(false);

  return (
    <ReactDropdown
      className={className}
      onToggle={() => setActive(!active)}
      show={active}
    >
      <ReactDropdown.Toggle as={Toggle}>
        {toggle}
      </ReactDropdown.Toggle>
      <ReactDropdown.Menu
        alignRight={alignRight}
        as={Menu}
        onClick={() => setActive(false)}
      >
        {menu}
      </ReactDropdown.Menu>
    </ReactDropdown>
  );
}

Dropdown.propTypes = {
  alignRight: PropTypes.bool,
  className: PropTypes.string,
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
  alignRight: false,
  className: null,
  menu: null,
  toggle: null,
};

export default style(Dropdown, {
  height: '100%',
});
