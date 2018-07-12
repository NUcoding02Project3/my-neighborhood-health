import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Communities from './components/Communities';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
