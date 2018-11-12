"use strict";


const addTodo = (text) => {
  let id = 0;
  return {
    type: 'ADD_TODO',
    id: id++,
    text,
  }
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
};

export {
  addTodo,
  toggleTodo,
};