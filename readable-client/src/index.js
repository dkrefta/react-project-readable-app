import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from '/reducers'

import {BrowserRouter} from 'react-router-dom';

const reduxDevTools = window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()

const store = createStore(rootReducer, reduxDevTools)


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
      </BrowserRouter>
    </Provider>, document.getElementById('root'));
    
registerServiceWorker();
