import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from '@/layout/Header'
import { Footer } from '@/layout/Footer'
import { Companies } from '@/pages/Companies';
import { NewCompany } from '@/pages/NewCompany';
import '@/assets/styles/app.scss';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.REACT_APP_BASE_PATH}>
        <div className="App">
          <Header />
          <div className="page-container container">
            <Route path="/" exact component={Companies} />
            <Route path="/new-company/" component={NewCompany} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
