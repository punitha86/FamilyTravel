import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
class Forms extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
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
    e.preventDefault()
    const data = {
  		name: this.state.name,
  		date: this.state.date,
      length_of_stay: this.state.length_of_stay
  	};
      axios.post('http://localhost:4500/trips',data)
    	.then(res => console.log(res))
  }

  componentDidMount(){
      this.setState({
          name: this.props.name,
          date: this.props.date,
          length_of_stay: this.props.length_of_stay,
          id: this.props.id
      })
  }


  render () {
   return (
     <div className="container">
    <Form onSubmit={this.handleSubmit}>
      <Form.Group >
        <Form.Label>Trip</Form.Label>
        <Form.Control type="text" placeholder="Your Habit" id= "name" value={this.state.name} onChange={this.handleChange}/>
      </Form.Group>
​
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Describe your habit" id= "date" value={this.state.date} onChange={this.handleChange}/>
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
export default Forms
