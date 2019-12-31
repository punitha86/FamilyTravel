import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
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

  render () {
   return (
     <>
     <h3>Login components</h3>
        <Button>
        <a href="http://localhost:4500/auth/google">Google+</a>
        </Button>
      </>
   )}
}
export default Login
