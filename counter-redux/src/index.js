/**
 * Created by betty on 11/9/18.
 */

import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import Counter from './components/Counter';
import reducer from './reducer';

const rootElement = document.getElementById('root');
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Counter/>
  </Provider>
  , rootElement);






