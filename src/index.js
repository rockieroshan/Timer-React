import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';

class App extends Component {
  render(){
    return (
      <div>
        <Timer />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
