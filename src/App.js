import React from 'react';
import queryString from "query-string";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Forms from './components/Forms.js';
import Login from './components/Login.js';
import Edit from './components/Edit.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import {withCookies} from 'react-cookie';
import axios from 'axios';

class App extends React.Component {
constructor(){
  super()
  this.state={
    user_id:'',
    loggedIn: false,
			user: null
  }
}
componentDidMount() {
    // var query = queryString.parse(window.location.search);
    // console.log(query);
    // //user_id=query;
    // this.setState({user_id:query})
    // console.log(this.state.user_id);

    axios.get('http://localhost:4500/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
}

  render(){
    //const {cookies} = this.props;
    //console.log(this.props.cookies);
    return (
      <Router>
      <Header />
      <div className="container">
<p>Welcome!{this.state.user_id.user}</p>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">Family Travel</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/form'} className="nav-link">Create Trips</Link>
            </li>
            <li className="nav-item">
              <Link to={'/main'} className="nav-link">Trips</Link>
            </li>

            {this.state.user_id===''?
            <li className="nav-item">
              <a  href="http://localhost:4500/auth/google">
              <button>Login with Google+</button>
              </a>
            </li>
            :
            <li className="nav-item">
              <a  href="http://localhost:4500/auth/google">
              <button>Logout</button>
              </a>
            </li>

            }

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
