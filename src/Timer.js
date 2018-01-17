import React, { Component } from 'react';
import './Timer.css';


export default class Timer extends Component {
   componentDidMount(){
     this.timer = setInterval(this.handleAddOne, 1000)
   }
  constructor(props){
    super(props);
    this.state = {count: 0}
    this.handleAddOne = this.handleAddOne.bind(this);
  }
 
  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleAddOne}>Add</button>
        <h1>You have been on this site since:</h1> 
        <p>{this.state.count} Seconds</p>
      </div>
    );
  }
}