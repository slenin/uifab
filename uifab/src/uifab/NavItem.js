import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Box from './Box';
import Button from './Button';
import EllipsisText from './EllipsisText';
import Flex from './Flex';
import Icon from './Icon';
import { withStyles } from './styles';

function NavItem(props) {
  const {
    className, icon,
    to, text,
  } = props;
  const hasIcon = icon && true;
  return (
    <Button
      className={className}
      format="link"
      to={to}
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
    </Button>
  );
}

NavItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.node,
  ]),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  text: PropTypes.string,
};

NavItem.defaultProps = {
  className: null,
  icon: null,
  to: null,
  text: null,
};


export default withRouter(withStyles(NavItem,
  (props, { css }) => css({
    color: props.location.pathname === props.to ? 'primary' : 'inherit',
    width: '100%',
    '&:hover': {
      color: 'primary',
    },
  })));
