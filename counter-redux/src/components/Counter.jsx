
import React from 'react';
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
  const {counter} = state;
  return {counter};
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => dispatch({type: action})
  }
};

const Counter = ({counter, dispatch}) => {
  return (
    <div>
      <li
        style={{
          textDecoration: 'line-through'
        }}
      >
       this is line-through
      </li>
      Clicked times: {counter}
      <button id="increase" onClick={ () => dispatch('increase')}>+</button>
      <button id="decrease" onClick={ () => dispatch('decrease')}>-</button>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);