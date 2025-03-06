import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase';
import { DB_CONFIG } from './Config';

class App extends Component {
  constructor() {
    super()

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('speed');

    this.state = {
      speed: 10
    }
  }

  componentDidMount() {
    this.database.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div>
        <h1>The value is {this.state.speed}</h1>
      </div>
    )
  }
}

ReactDOM.render(
<App />,
document.getElementById('root')
);
