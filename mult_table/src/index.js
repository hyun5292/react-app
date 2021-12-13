import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

class GuGuDan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: '',
      result: '두구두구'
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    var _result = this.state.first + " * " + this.state.second + " = " + this.state.value + " ";
    if(parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState({
        result: _result + '정답!!!!',
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: ''
      });
    } else {
      this.setState({
        result: _result + '땡!!!',
        value: ''
      });
    }
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Q1. {this.state.first} * {this.state.second} = ?</h1>
        <form onSubmit={this.onSubmit}>
          <input 
            type="number"
            value={this.state.value}
            onChange={this.onChange}/>
          <button>정답은?!</button>
        </form>
        <div id="result">{this.state.result}</div>
      </div>
    );
  }
}

ReactDOM.render(<div><GuGuDan /><GuGuDan /><GuGuDan /></div>, document.getElementById('root'));