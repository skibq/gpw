import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from '@/layout/Header'
import { Companies } from '@/pages/Companies';
import { NewCompany } from '@/pages/NewCompany';
import '@/assets/styles/app.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Companies} />
          <Route path="/new-company/" component={NewCompany} />
        </div>
      </Router>
    );
  }
}

export default App;
