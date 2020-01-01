import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    <Form >
      <Form.Group >
        <Form.Label>Trip</Form.Label>
        <Form.Control type="text" placeholder="Your Habit" id= "habit" value={this.state.name} onChange={this.handleChange}/>
      </Form.Group>
​
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Describe your habit" id= "description" value={this.state.date} onChange={this.handleChange}/>
      </Form.Group>
​
      <Form.Group>
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" placeholder="Comments about your habit!" id= "comments" value={this.state.length_of_stay} onChange={this.handleChange}/>
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
