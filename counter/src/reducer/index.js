/**
 * Created by betty on 11/9/18.
 */
module.exports = (state = 0, action) => {
  switch (action.type) {
    case 'increase':
      return state + 1;
    case 'decrease':
      return state - 1;
    default:
      return state;
  }
};