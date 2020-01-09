import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
let baseUrl = 'https://familytravel.herokuapp.com'


class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      date: '',
      length_of_stay:'',
      places_to_visit: ''
    }
  }

  componentDidMount() {
    console.log(this.props);
      // axios.get(`${baseUrl}/trips/`+this.props.params.id)
      //     .then(response => {
      //         this.setState({
      //           name: response.data.name,
      //           date: response.data.date,
      //           length_of_stay: response.data.length_of_stay,
      //           places_to_visit: response.data.places_to_visit});
      //     })
      //     .catch( (error)=>
      //         console.log(error)
      //     )
    }

    // ==============
    // HANDLERS
    // ==============
    // handles form change
    handleChange = (e) => {
      this.setState({[e.target.id] : e.target.value})
    }

  handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      date: this.state.date,
      length_of_stay: this.state.length_of_stay,
      places_to_visit: this.state.places_to_visit
    };
    console.log("inside edit",obj);
    axios.put(`${baseUrl}/trips/`+this.props.params.id, obj)
        .then(res => {console.log(res.data);
        this.props.history.push('/main');});
  }

  render() {
    if(this.props.user!==null)
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Trip</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Trip Name:  </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      id="name"
                      onChange={this.handleChange}
                      />
                </div>
                <div className="form-group">
                    <label>Date of Travel: </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.date}
                      id="date"
                      onChange={this.handleChange}
                      />
                </div>
                <div className="form-group">
                    <label>Length Of Stay: </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.length_of_stay}
                      id="length_of_stay"
                      onChange={this.handleChange}
                      />
                </div>
                <div className="form-group">
                    <label>Places To Visit </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.places_to_visit}
                      id="places_to_visit"
                      onChange={this.handleChange}
                      />
                </div>
                <div className="form-group">
                    <input type="submit"
                      value="Update Trips"
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
    else {
      console.log("redirecting");
     return <Redirect to={{ pathname: '/' }} />
    }

  }
}

export default Edit
