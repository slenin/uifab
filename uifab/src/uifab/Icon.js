import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import stylex from './stylex';

function Icon(props) {
  const {
    className, icon,
    pulse, spin,
  } = props;

  let type = 'fas';
  let name = null;
  if (Array.isArray(icon)) {
    [type, name] = icon;
  } else {
    name = icon;
  }

  return (
    <FontAwesomeIcon
      className={className}
      icon={[type, name]}
      spin={spin}
      pulse={pulse}
    />
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
  pulse: PropTypes.bool,
  spin: PropTypes.bool,
};

Icon.defaultProps = {
  className: null,
  pulse: false,
  spin: false,
};

export default stylex(Icon);
