/**
 * Created by betty on 11/12/18.
 */
import {combineReducers} from 'redux'
import {VisibilityFilters} from "../actions/visibilityFilterAction";

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state
  }
};

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state
  }
};


export default combineReducers({
  todos,
  visibilityFilter
});