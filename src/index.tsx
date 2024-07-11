// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Add this line
import App from './App';
import { Provider } from 'react-redux';
import store from './components/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
