import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import Box from './Box';
import Icon from './Icon';
import { withStyles } from './styles';

function Tooltip(props) {
  const {
    className, maxWidth, name, tooltip,
  } = props;
  return (
    <>
      <Box
        className={className}
        data-tip={tooltip}
        data-for={name}
      >
        <Icon icon="info-circle" />
      </Box>
      <ReactTooltip id={name} effect="solid" style={{ maxWidth }} />
    </>
  );
}

Tooltip.propTypes = {
  className: PropTypes.string,
  maxWidth: PropTypes.string,
  name: PropTypes.string,
  tooltip: PropTypes.string,
};

Tooltip.defaultProps = {
  className: null,
  maxWidth: '50%',
  name: 'tooltip',
  tooltip: null,
};

export default withStyles(Tooltip, {
  color: 'muted',
  cursor: 'pointer',
  display: 'inline-block',
});
