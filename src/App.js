import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Forms from './components/Forms.js';
import Login from './components/Login.js';
import Edit from './components/Edit.js';
import Header from './components/Header.js';
import Main from './components/Main.js';


import Navigation from './components/Navigation.js'

class App extends React.Component {
  render(){
    return (

      <Router>
      <Header />
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={'/'} className="navbar-brand">Family Travel</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to={'/'} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={'/login'} className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to={'/form'} className="nav-link">Create Trips</Link>
          </li>
          <li className="nav-item">
            <Link to={'/main'} className="nav-link">Trips</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Switch>
        <Route path="/login" exact component={Login} />
        <Route exact path='/form' component={ Forms } />
        <Route path='/main' component={ Main } />
        <Route exact path='/edit/:id' component={ Edit } />
    </Switch>
  </div>
</Router>
    );
  }

}

export default App;
