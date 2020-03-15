import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Icon from './Icon';
import style from './style';

function IconButton(props) {
  const {
    className, icon, onClick,
  } = props;
  return (
    <Button
      className={className}
      format="link"
      onClick={(e) => onClick && onClick(e)}
    >
      <Icon
        icon={icon}
      />
    </Button>
  );
}

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  className: null,
  onClick: null,
};

export default style(IconButton, {
  color: 'inherit',
  '&:hover': {
    opacity: 0.8,
  },
});
