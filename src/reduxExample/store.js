import { createStore, combineReducers } from 'redux';

import accountReducer from './reducers/accountReducer';
import tabReducer from './reducers/tabReducer';

const reducers = combineReducers({
  account: accountReducer,
  tabs: tabReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
