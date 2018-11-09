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

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Counter
        state={store.getState().counter}
        increase={() => {
          return store.dispatch({type: 'increase'})
        }}
        decrease={() => {
          return store.dispatch({type: 'decrease'})
        }}
      />
    </Provider>
    , rootElement);

};

render();
store.subscribe(render);






