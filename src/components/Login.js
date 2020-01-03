import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {

  constructor() {
  		super()
  		this.state = {
  			username: '',
  			password: '',
  			redirectTo: null
  		}
  	}

  	handleChange= (event)=> {
  		this.setState({
  			[event.target.name]: event.target.value
  		})
  	}

  	handleSubmit=(event)=> {
  		event.preventDefault()
  		console.log('handleSubmit')
  		this.props._login(this.state.username, this.state.password)
  		this.setState({
  			redirectTo: '/'
  		})
  	}
    googleSignIn = ()=>{
      axios.get(`${baseUrl}/auth/google`)
      .then(response => {
        console.log("Inside signin",response);
          this.setState({
          user:response.data
      })
    })
      .catch( (error)=>
          console.log(error)
      )
    }


  	render() {
  		if (this.state.redirectTo) {
  			return <Redirect to={{ pathname: this.state.redirectTo }} />
  		} else {
  			return (
  				<div className="LoginForm">
  					<h1>Login form</h1>
  					<form>
  						<label htmlFor="username">Username: </label>
  						<input
  							type="text"
  							name="username"
  							value={this.state.username}
  							onChange={this.handleChange}
  						/>
  						<label htmlFor="password">Password: </label>
  						<input
  							type="password"
  							name="password"
  							value={this.state.password}
  							onChange={this.handleChange}
  						/>
  						<button onClick={this.handleSubmit}>Login</button>
  					</form>

  						<Button variant="info" onClick={this.googleSignIn}>Login with Google+</Button>
              <a href=`${baseUrl}/auth/google`>Test
  					</a>
  				</div>
  			)
  		}
  	}

}
export default Login


///////////////////GRAVEYARD//////////////////
//
// constructor(){
//   super()
//   this.state={
//     email:'',
//     password:''
//   }
// }
  // ==============
  // HANDLERS
  // ==============
  // handles form change
  // handleChange = (e) => {
  //   this.setState({[e.target.id] : e.target.value})
  // }
  // handleSubmit=(e)=>{
  //   e.preventDefault();//stopping from refreshing the page
  //   const data = {
	// 		email: this.state.email,
	// 		password: this.state.password
	// 	};
    // axios.create({
    // withCredentials: true
    // });
    // Make a request for a user with google
    // axios.get('http://localhost:4500/auth/google',{headers:{'Content-Type': 'application/json'}})
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  //   axios.post('http://localhost:4500/auth/google',data)
	// 	.then(res => console.log(res))
  // }

  /////render () {
   // return (
   //   <>
   //   <h3>Login components</h3>
   //      <Button>
   //      <a href="http://localhost:4500/auth/google">Google+</a>
   //      </Button>
   //    </>
   // )}
