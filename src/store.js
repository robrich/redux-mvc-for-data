import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// https://daveceddia.com/what-is-a-thunk/ - thunk inspects results from action creators, if it's a function it calls it, passing `dispatch` and `getState`

import reducers from './reducers';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  storeEnhancers(applyMiddleware(thunk))
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const reducers = require('./reducers').default;
    store.replaceReducer(reducers);
  });
}

export default store;
