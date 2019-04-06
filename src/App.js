import React, { Component } from 'react';
import { Header } from 'src/layout/Header'
import 'src/assets/styles/app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
