import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {

  constructor(props) {
    super(props); var config = {
      apiKey: "AIzaSyAy3U6PI5cIzxrbsxrZvSJJzmVsmplL0j0",
      authDomain: "itstore-d8e6f.firebaseapp.com",
      databaseURL: "https://itstore-d8e6f.firebaseio.com",
      projectId: "itstore-d8e6f",
      storageBucket: "itstore-d8e6f.appspot.com",
      messagingSenderId: "547222634698"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React from Here!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
