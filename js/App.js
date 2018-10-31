import React, { Component } from 'react';
import firebase from './Firebase'

class App extends Component {
  componentWillMount() {
    console.log(firebase.database())
  }
  render() {
    return <h1>Hello World</h1>;
  }
}

export default App;
