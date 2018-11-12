
import React from 'react';
import {addTodo} from '../actions/todoAction'
import {connect} from 'react-redux'

const AddTodo = ({dispatch}) => {
 let input;
  return (
    <div>
      <form onSubmit={(e) => {
        if (!input.value.trim()) {
          return;
        }
        e.preventDefault();
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input ref={node => input = node}/>
        <button type="submit">add todo</button>
      </form>
    </div>
  )
};


export default connect()(AddTodo);
