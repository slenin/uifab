import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import Box from './Box';
import Error from './Error';
import Loading from './Loading';
import Titlebar from './Titlebar';
import stylex from './stylex';

function Modal(props) {
  const {
    action, children, className,
    error, loading, overlayBg, overlayStyle,
    removePadding, subtitle, title,
  } = props;

  if (overlayBg && !overlayStyle.backgroundColor) {
    overlayStyle.backgroundColor = overlayBg;
  }

  return (
    <ReactModal
      className={className}
      onAfterOpen={() => {
        document.body.style.overflow = 'hidden';
      }}
      onAfterClose={() => {
        document.body.removeAttribute('style');
      }}
      isOpen
      shouldCloseOnOverlayClick={false}
      contentLabel={title}
      style={{
        overlay: overlayStyle,
      }}
    >
      {title && (
        <Titlebar
          title={title}
          subtitle={subtitle}
          action={action}
          modal
        />
      )}
      <Loading loading={loading}>
        {error && (
          <Error>
            {error}
          </Error>
        )}
        {!error && (
          <Box
            px={removePadding ? 0 : [3, 6]}
            pt={removePadding ? 0 : 3}
            pb={removePadding ? 0 : 6}
          >
            {children}
          </Box>
        )}
      </Loading>
    </ReactModal>
  );
}

Modal.propTypes = {
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
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
  overlayBg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  overlayStyle: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
  removePadding: PropTypes.bool,
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

Modal.defaultProps = {
  action: null,
  children: null,
  className: null,
  error: null,
  loading: null,
  overlayBg: 'rgba(255, 255, 255, 0.9)',
  overlayStyle: {
    bottom: 0,
    left: 0,
    overflowX: 'auto',
    overflowY: 'scroll',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  removePadding: false,
  subtitle: null,
  title: null,
};

export default stylex(Modal, (props, { css, themeGet }) => css({
  bg: 'bg',
  borderColor: 'border',
  borderRadius: 4,
  borderStyle: 'solid',
  borderWidth: [0, 1],
  bottom: 0,
  color: 'fg',
  minHeight: ['100vh', 0],
  left: 0,
  marginBottom: [0, 40],
  marginLeft: [0, 'auto'],
  marginRight: [0, 'auto'],
  marginTop: [0, 40],
  minWidth: themeGet('minimumWidth', 0)(props),
  outline: 'none',
  overflow: 'hidden',
  right: 0,
  top: 0,
  width: ['100%', '30rem'],
}));
