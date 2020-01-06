import React from 'react';
import cookies from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Forms from './components/Forms.js';
import Login from './components/Login.js';
import Edit from './components/Edit.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Home from './components/Home.js';
import { Redirect } from 'react-router-dom';
import SignupForm from './components/SignupForm.js';
import Nav from 'react-bootstrap/Nav';
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
      <>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to={'/form'} >
            Create Trips
          </Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to={'/main'}>Trips</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to={'/login'} onClick={props._logout}>
            Logout
          </Link></Nav.Link>
        </Nav.Item>
      </Nav>
      </>
		)
	} else {
		return(
<>
<Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><Link to="/login" >
      Login
    </Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><Link to="/signup">
      Sign Up
    </Link></Nav.Link>
  </Nav.Item>
</Nav>
      </>
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
  //////spent 3 days finding this line......./////////////////////
  ///Thank you GOD!!!!!///////
    axios.defaults.withCredentials = true;
    ////////////////////////////////////////
    ////////////////////////////////////////
    axios.get(`${baseUrl}/auth/user`).then(response => {
			if (response.data.user) {
				console.log('THERE IS A USER',response.data.user)
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
    console.log(response.data,response.status)
    if (response.status === 200) {
      this.setState({
        loggedIn: false,
        user: null,
        redirectTo: '/login'
      });
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
      console.log(response.data.user)
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
    // const {cookies} = this.props;
    // console.log(this.props.cookies);
    return (
      <Router>
      <Header user={this.state.user} />
      {/* LINKS to our different 'pages' */}
				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
      <div className="container">

        <Switch>
            <Route path="/login" exact render={() =>
						<Login
							_login={this._login}
						/>} />
            <Route exact path="/" render={() => <Home user={this.state.user} />} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path='/form' render={() => <Forms user={this.state.user}/>}/>
            <Route path='/main' component={ ()=> <Main user={this.state.user} />} />
            <Route exact path='/edit/:id' component={ Edit } />
        </Switch>
      </div>
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
      </Router>

    );
  }

}

export default App;
