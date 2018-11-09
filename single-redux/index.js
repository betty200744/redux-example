/**
 * Created by betty on 11/9/18.
 */

const {combineReducers, createStore} = require('redux');


const counter = (counter = 0, action) => {
  switch (action.type) {
    case 'increase':
      return counter + 1;
    case 'decrease':
      return counter - 1;
    default:
      return counter;
  }
};

const reducers = combineReducers({counter});

const store = createStore(reducers);

store.subscribe(() => {
  console.log(store.getState().counter);
});

store.dispatch({
  type: 'increase'
});
store.dispatch({
  type: 'increase'
});
store.dispatch({
  type: 'increase'
});
