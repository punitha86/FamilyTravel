import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {
  withRouter
} from 'react-router-dom';
let baseUrl = 'https://cors-anywhere.herokuapp.com/https://familytravel.herokuapp.com';
class Forms extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      length_of_stay: ''
    }
  }


  // ==============
  // HANDLERS
  // ==============
  // handles form change
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  // handles submit
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
  		name: this.state.name,
  		date: this.state.date,
      user_id: this.props.user.local.username,
      length_of_stay: this.state.length_of_stay
  	};
      axios.post(`${baseUrl}/trip`s,data)
    	.then(res => {console.log(res);
        this.props.history.push('/main');
      })

      this.setState ({
        name: '',
        date: '',
        length_of_stay: ''
      })
  }




  render () {
   return (
     <div className="container">
    <Form onSubmit={this.handleSubmit}>
      <Form.Group >
        <Form.Label>Trip</Form.Label>
        <Form.Control type="text" placeholder="Name your trip" id= "name" value={this.state.name} onChange={this.handleChange}/>
      </Form.Group>
​
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Date of Trip" id= "date" value={this.state.date} onChange={this.handleChange}/>
      </Form.Group>
​
      <Form.Group>
        <Form.Label>Length of Stay</Form.Label>
        <Form.Control type="number" placeholder="Number of Days" id= "length_of_stay" value={this.state.length_of_stay} onChange={this.handleChange}/>
      </Form.Group>
​
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
​
    </div>

   )}
}
export default withRouter(Forms)
