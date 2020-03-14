import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Icon from './Icon';
import { withStyles } from './styles';

function Loading(props) {
  const { className, children, loading } = props;
  if (loading) {
    return (
      <Box className={className}>
        <Icon
          icon="spinner"
          pulse
        />
      </Box>
    );
  }

  return children;
}

Loading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  className: null,
  children: null,
  loading: false,
};

export default withStyles(Loading, {
  color: 'muted',
  mb: 4,
  mt: 4,
  textAlign: 'center',
});
