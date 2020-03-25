import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Error from './Error';
import Loading from './Loading';
import Titlebar from './Titlebar';
import style from './style';

function Page(props) {
  const {
    action, backButton, children, className,
    error, loading,
    subtitle, title,
  } = props;

  return (
    <Box className={className}>
      {title && (
        <Titlebar
          title={title}
          subtitle={subtitle}
          action={action}
          backButton={backButton}
        />
      )}
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

Page.propTypes = {
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  backButton: PropTypes.bool,
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
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

Page.defaultProps = {
  action: null,
  backButton: true,
  children: null,
  className: null,
  error: null,
  loading: null,
  subtitle: null,
  title: null,
};

export default style(Page);
