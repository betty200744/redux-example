
import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Counter extends Component{
  constructor(props){
    super(props);
    this.asyncIncrease = this.asyncIncrease.bind(this);
  }

  asyncIncrease() {
    setTimeout(this.props.increase, 1000)
  }

  render(){
    const {state, increase, decrease} = this.props;
    return (
      <div>
        Clicked times: {state}
        <button id="increase" onClick={increase}>+</button>
        <button id="decrease" onClick={decrease}>-</button>
        <button id="async" onClick={this.asyncIncrease}>async+</button>
      </div>
    )
  }
}

Counter.propTypes = {
  state: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};


export default Counter;