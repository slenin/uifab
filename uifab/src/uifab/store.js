import configureStore from './configureStore';
import history from './history';

const initialState = window.initialReduxState;
const store = (reducers) => configureStore(history, initialState, reducers);

export default store;
