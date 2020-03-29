import React from 'react';
import ReactDOM from 'react-dom';

import { FabProvider } from 'uifab';

import App from './App';
import * as serviceWorker from './serviceWorker';
import customTheme from './customTheme';

import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <FabProvider
    rootElement={rootElement}
    theme={customTheme}
  >
    <App />
  </FabProvider>,
  rootElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
