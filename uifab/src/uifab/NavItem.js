import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

import Box from './Box';
import Button from './Button';
import EllipsisText from './EllipsisText';
import Flex from './Flex';
import Icon from './Icon';
import stylex from './stylex';

function NavItem(props) {
  const {
    className, disabled, icon, onClick,
    to, text,
  } = props;
  const hasIcon = icon && true;
  const location = useLocation();
  return (
    <Button
      className={className}
      format="inline"
      color={location.pathname === to ? 'primary' : 'inherit'}
      to={to}
      onClick={onClick}
      disabled={disabled}
    >
      <Flex alignItems="center">
        {hasIcon && (
          <Box
            lineHeight="100%"
            minWidth="1em"
            mr={3}
            textAlign="left"
            width="1em"
          >
            {!React.isValidElement(icon) && (
              <Icon
                icon={icon}
              />
            )}
            {React.isValidElement(icon) && icon}
          </Box>
        )}
        <EllipsisText
          textAlign="left"
          text={text}
        />
      </Flex>
    </Button>
  );
}

NavItem.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  text: PropTypes.string,
};

NavItem.defaultProps = {
  className: null,
  disabled: false,
  icon: null,
  onClick: null,
  to: null,
  text: null,
};


export default stylex(NavItem, {
  maxWidth: '100%',
  '&:hover': {
    color: 'primary',
  },
});
