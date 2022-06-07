import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
   
    this.state = { current: 0}
  };

  inc = () => {
    this.setState((prevState) => ({ current: prevState.current + 1 }))
  };
  incm = () => {
    this.setState((prevState) => ({ current: prevState.current - 1 }))
    
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
    <div>
        <div>
        min<input name="min" type="number" style={{width: '40px'}}  value={this.state.min}  onChange={this.handleInputChange} ></input> 
        max<input name="max" type="number" style={{width: '40px'}}  value={this.state.max}  onChange={this.handleInputChange}></input>
        </div>

          <div>
         
    </div>
        <button type="button" onClick={this.incm}>
          {' '}
          -{' '}
        </button>
        <span>{this.state.current}</span>
        <button type="button" onClick={this.inc}>
          {' '}
          +{' '}
        </button>
      </div>
    );
  }
};
export default Counter;