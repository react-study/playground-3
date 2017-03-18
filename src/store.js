import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import TodoReducer from './reducers/TodoReducer';

const store = createStore(
    TodoReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
