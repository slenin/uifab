import React from 'react';
import PropTypes from 'prop-types';
import {
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components';

import defaultTheme from './theme';

function ThemeProvider(props) {
  const {
    children, theme,
  } = props;

  return (
    <StyledComponentsThemeProvider theme={theme || defaultTheme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  theme: PropTypes.shape({}),
};

ThemeProvider.defaultProps = {
  children: null,
  theme: null,
};

export default ThemeProvider;
