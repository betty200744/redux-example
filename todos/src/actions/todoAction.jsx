let id = 0;
const addTodo = (text) => {
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