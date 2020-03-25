import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Error from './Error';
import Loading from './Loading';
import style from './style';

function Section(props) {
  const {
    children, className,
    error, loading,
  } = props;

  return (
    <Box
      className={className}
    >
      <Loading
        loading={loading}
      >
        {error && (
          <Error>
            {error}
          </Error>
        )}
        {!error && children}
      </Loading>
    </Box>
  );
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  loading: PropTypes.bool,
};

Section.defaultProps = {
  children: null,
  className: null,
  error: null,
  loading: null,
};

export default style(Section);
