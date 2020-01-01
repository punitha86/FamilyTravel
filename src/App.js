import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Forms from './components/Forms.js';
import Login from './components/Login.js';
import Header from './components/Header.js';
import Main from './components/Main.js';

import Trip from './components/Trip.js';

import Navigation from './components/Navigation.js'

class App extends React.Component {
  render(){
    return (
      <Router>
      <div className="App">
            <Header />
            <Navigation/>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/main">Trips</Link>
              <Link to="/form">Create Trips</Link>
            </nav>

            <Route path="/login" exact component={Login} />
            <Route path="/main" exact component={Main} />
            <Route path="/form" exact component={Forms} />


      </div>
      </Router>
    );
  }

}

export default App;
