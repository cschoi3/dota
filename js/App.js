import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'https://express-mongodb-setup-fhxlfgmjuv.now.sh';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      bloodTypes: null,
      easternZodiacs: null,
      westernZodiacs: null,
    };
  }

  componentDidMount() {
    axios
      .get(`${API_URL}/users`)
      .then(res => this.setState({ users: res.data }));
    axios
      .get(`${API_URL}/bloodTypes`)
      .then(res => this.setState({ bloodTypes: res.data }));
    axios
      .get(`${API_URL}/westernZodiacs`)
      .then(res => this.setState({ westernZodiacs: res.data }));
    axios
      .get(`${API_URL}/easternZodiacs`)
      .then(res => this.setState({ easternZodiacs: res.data }));
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default App;
