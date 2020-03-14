import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export default function configureStore(history, initialState, reducers) {
  const middleware = [
    thunk,
    routerMiddleware(history),
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    /* eslint-disable no-underscore-dangle */
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    /* eslint-enable no-underscore-dangle */
  }

  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers),
  );
}
