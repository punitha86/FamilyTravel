import React from 'react';
import cookie from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Forms from './components/Forms.js';
import Login from './components/Login.js';
import Edit from './components/Edit.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Home from './components/Home.js';

import SignupForm from './components/SignupForm.js';
import axios from 'axios';
// =============================
// COMPONENT CLASS
// =============================
let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:4500'
} else {
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://familytravel.herokuapp.com';
}



///////////header links based on logged in status

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
          <li className="nav-item">
            <Link to={'/form'} className="nav-link">Create Trips</Link>
          </li>
          <li className="nav-item">
            <Link to={'/main'} className="nav-link">Trips</Link>
          </li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
          <li className="nav-item">
            <Link to={'/form'} className="nav-link">Create Trips</Link>
          </li>
          <li className="nav-item">
            <Link to={'/main'} className="nav-link">Trips</Link>
          </li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							sign up
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

//////////////////////////////////////////////


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
  //console.log(window);
    axios.get(`${baseUrl}/auth/user`).then(response => {
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
_logout=(event)=> {
  event.preventDefault()
  console.log('logging out')
  axios.post(`${baseUrl}/auth/logout`).then(response => {
    console.log(response.data)
    if (response.status === 200) {
      this.setState({
        loggedIn: false,
        user: null
      })
    }
  })
}

_login=(username, password)=>{
  axios
    .post(`${baseUrl}/auth/login`, {
      username,
      password
    })
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      }
    })
}
  render(){
    //const {cookies} = this.props;
    //console.log(this.props.cookies);
    return (
      <Router>
      <Header user={this.state.user} />
      {/* LINKS to our different 'pages' */}
				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
      <div className="container">
      {/*  <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        </nav>*/}
        <Switch>
            <Route path="/login" exact render={() =>
						<Login
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>} />
            <Route exact path="/" render={() => <Home user={this.state.user} />} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path='/form' render={() => <Forms user={this.state.user}/>}/>
            <Route path='/main' component={ Main } />
            <Route exact path='/edit/:id' component={ Edit } />
        </Switch>
      </div>
      </Router>
    );
  }

}

export default App;
