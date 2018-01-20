import React, {Component} from 'react';

class Calculator extends Component {
    constructor(props){
      super(props)
      this.state = {
        value1: "3",
        value2: "2",
        outPut: ""
      }
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
       const target = event.target;
       const value = target.value;
       const name = target.name;

       this.setState({
         [name]: value
       });
     }

  render () {


    return (
      <div className="container">
        <h1>React Calculator!</h1>
        <form>
          <label>
          <input type="text" name="value1" value={this.state.value1} onChange={this.handleInputChange} />
          </label>
          <span>+</span>
          <label>
          <input type="text" name="value2" value={this.state.value2} onChange={this.handleInputChange} />
          </label>
          <span>=</span>
          <input type="submit" value="Submit" />
        </form>
        <h1> Sum: {parseInt(this.state.value1) + parseInt(this.state.value2)}</h1>
      </div>
    )
  }
}

export default Calculator
