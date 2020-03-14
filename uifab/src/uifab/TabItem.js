import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Badge from './Badge';
import Box from './Box';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import { withStyles } from './styles';

function TabItem(props) {
  const {
    active, activeIcon, badge, className, icon, location,
    onClick, to, text,
  } = props;
  const isActive = location.pathname === to || active;
  const hasIcon = icon && true;
  return (
    <Button
      className={className}
      format="link"
      onClick={onClick}
      to={to}
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
          value={text}
        />
      )}
    </Button>
  );
}

TabItem.propTypes = {
  active: PropTypes.bool,
  badge: PropTypes.string,
  className: PropTypes.string,
  activeIcon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.node,
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.node,
  ]),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
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
  icon: null,
  onClick: null,
  to: null,
  text: null,
};

export default withRouter(withStyles(TabItem,
  (props, { css }) => css({
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: props.location.pathname === props.to || props.active ? 'primary' : 'transparent',
    color: props.location.pathname === props.to || props.active ? 'primary' : 'inherit',
    height: '100%',
    width: '100%',
    '&:hover': {
      color: 'primary',
    },
  })));
