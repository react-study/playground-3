import React from 'react';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Main;

/*
// 원래는 src/main.js 파일이 요렇게 되어야 합니다.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/
