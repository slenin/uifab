import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';
import ScrollToTop from './ScrollToTop';
import store from './store';
import ThemeProvider from './ThemeProvider';

import './assets';

function FabProvider(props) {
  const {
    children, reducers, rootElement, theme,
  } = props;

  ReactModal.setAppElement(rootElement);

  return (
    <Provider store={store(reducers)}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <ScrollToTop>
            {children}
          </ScrollToTop>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

FabProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  rootElement: PropTypes.shape({}).isRequired,
  reducers: PropTypes.shape({}),
  theme: PropTypes.shape({}),
};

FabProvider.defaultProps = {
  children: null,
  reducers: null,
  theme: null,
};

export default FabProvider;
