/**
 * Created by betty on 11/9/18.
 */

import React from 'react'
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import {createStore} from 'redux';
import reducer from './reducer';

const rootElement = document.getElementById('root');
const store = createStore(reducer);
const render = () => {
  ReactDOM.render(
    <Counter
      state={store.getState()}
      increase={() => {
        return store.dispatch({type: 'increase'})
      }}
      decrease={() => {
        return store.dispatch({type: 'decrease'})
      }}
    />, rootElement);
};

render();
store.subscribe(render);



