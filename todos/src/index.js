/**
 * Created by betty on 11/12/18.
 */
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {render} from 'react-dom';
import App from './components/App';
import reducers from './reducers';

const rootElement = document.getElementById('root');
const store = createStore(reducers);

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , rootElement);