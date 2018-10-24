import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    query: '',
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">ZH Online</h1>
      </header>
      <p className="App-intro">
      Search the text of the Zion's Harp.
      </p>
      <form>
      <input
      placeholder="Search..."
      ref={input => this.search = input}
      onChange={this.handleInputChange}
      />
      <p>{this.state.query}</p>
      </form>
      </div>
    );
  }
}

export default App;
