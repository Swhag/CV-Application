import React, { Component } from 'react';
import './styles/App.css';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
      </>
    );
  }
}

export default App;
