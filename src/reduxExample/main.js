import React from 'react';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

const Main = () => (
  <Provider store = { store }>
    <App/>
  </Provider>
);

export default Main;

/*
//원래는 src/main.js 파일에 요렇게 요청되어야 합니다.
import React from 'react';
import ReactDOM from 'react-dom';

React.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/
