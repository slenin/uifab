import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

import Box from './Box';
import EllipsisText from './EllipsisText';
import Flex from './Flex';
import Icon from './Icon';
import Link from './Link';
import style from './style';

function NavItem(props) {
  const {
    className, icon, onClick,
    to, text,
  } = props;
  const hasIcon = icon && true;
  const location = useLocation();
  return (
    <Link
      className={className}
      color={location.pathname === to ? 'primary' : 'inherit'}
      to={to}
      onClick={onClick}
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
          value={text}
        />
      </Flex>
    </Link>
  );
}

NavItem.propTypes = {
  className: PropTypes.string,
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
  icon: null,
  onClick: null,
  to: null,
  text: null,
};


export default style(NavItem, {
  width: '100%',
  '&:hover': {
    color: 'primary',
  },
});
