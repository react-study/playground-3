import React from 'react';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

const Main = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Main;
