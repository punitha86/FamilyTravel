import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from './components/Menu.js';

class App extends React.Component {
  render(){
    return (
      <Router>
      <div className="App">
      <h1>Testing Links</h1>
            <nav>
              <Link to="/">Home</Link>
            </nav>
            <Route path="/" exact component={Menu} />
      </div>
      </Router>
    );
  }

}

export default App;
