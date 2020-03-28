import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

import Badge from './Badge';
import Box from './Box';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import stylex from './stylex';

function TabItem(props) {
  const {
    active, activeIcon, badge, className, disabled, icon,
    onClick, to, text,
  } = props;
  const location = useLocation();
  const isActive = location.pathname === to || active;
  const hasIcon = icon && true;
  return (
    <Button
      className={className}
      format="inline"
      borderBottomColor={isActive ? 'primary' : 'transparent'}
      color={isActive ? 'primary' : 'inherit'}
      flexDirection="column"
      justifyContent="center"
      onClick={onClick}
      to={to}
      disabled={disabled}
    >
      {hasIcon && (
        <Box
          height="1.25em"
          lineHeight="100%"
          mb={1}
          position="relative"
        >
          {!React.isValidElement(icon) && (
            <Icon
              fontSize="1.25em"
              fontWeight="normal"
              icon={isActive && activeIcon ? activeIcon : icon}
            />
          )}
          {React.isValidElement(icon) && !isActive && icon}
          {React.isValidElement(icon) && isActive && !activeIcon && icon}
          {React.isValidElement(icon) && isActive && activeIcon && activeIcon}
          {badge && (
            <Badge
              position="absolute"
              top={-4}
              left="50%"
              text={badge}
            />
          )}
        </Box>
      )}
      {text && (
        <Text
          fontSize={hasIcon ? '0.75em' : 'inherit'}
          fontWeight={hasIcon ? 'normal' : 'bold'}
          text={text}
        />
      )}
    </Button>
  );
}

TabItem.propTypes = {
  active: PropTypes.bool,
  activeIcon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.node,
  ]),
  badge: PropTypes.string,
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

TabItem.defaultProps = {
  active: false,
  activeIcon: null,
  badge: null,
  className: null,
  disabled: false,
  icon: null,
  onClick: null,
  to: null,
  text: null,
};

export default stylex(TabItem, {
  borderBottomWidth: 2,
  borderBottomStyle: 'solid',
  height: '100%',
  width: '100%',
  '&:hover': {
    color: 'primary',
    opacity: 1,
  },
});
