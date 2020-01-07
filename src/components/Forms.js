import React from 'react';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {
  withRouter
} from 'react-router-dom';
let baseUrl = 'https://cors-anywhere.herokuapp.com/https://familytravel.herokuapp.com';
//let baseUrl = 'http://localhost:4500';
class Forms extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      length_of_stay: '',
      places_to_visit: '',
      packName:'',
      things_to_pack:[{packName:''}]
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
 let temp_username= (this.props.user.firstName)?this.props.user.firstName:this.props.user.local.username;
 console.log("things to pack",this.state.things_to_pack);
    const data = {
  		name: this.state.name,
  		date: this.state.date,
      user_id: temp_username,
      length_of_stay: this.state.length_of_stay,
      places_to_visit:this.state.places_to_visit,
      things_to_pack:this.state.things_to_pack
  	};
    console.log("inside handle submit in forms");
      axios.post(`${baseUrl}/trips`,data)
    	.then(res => {console.log(res);
        this.props.history.push('/main');
      })

      this.setState ({
        name: '',
        date: '',
        length_of_stay: '',
        places_to_visit: ''
      })
  }


  handleAddPacking = () => {
    this.setState({
      things_to_pack: this.state.things_to_pack.concat([{ packName: '' }])
    });
  };

  handleRemovePacking = idx => () => {
    this.setState({
      things_to_pack: this.state.things_to_pack.filter((s, sidx) => idx !== sidx)
    });
  };
  handlePackingChange = idx => evt => {
  const newPacks = this.state.things_to_pack.map((packing, sidx) => {
    if (idx !== sidx) return packing;
    return { ...packing, packName: evt.target.value };
  });

  this.setState({ things_to_pack: newPacks });
};

  render () {
    if(this.props.user!==null)
   return (
     <div className="container">
    <Form onSubmit={this.handleSubmit}>
      <Form.Group >
        <Form.Label>Trip</Form.Label>
        <Form.Control type="text" placeholder="Name your trip" id= "name" value={this.state.name} onChange={this.handleChange}/>
      </Form.Group>
​     <Form.Group >
        {this.state.things_to_pack.map((thing, idx) => (
          <>
            <Form.Control type="text"
              placeholder="Things to pack"
              value={thing.packName}
              onChange={this.handlePackingChange(idx)}
            />
            <button
              type="button"
              onClick={this.handleRemovePacking(idx)}
              className="small"
            > x
            </button>
        </>
        ))}
        <button
         type="button"
         onClick={this.handleAddPacking}
         className="small"
       >
         Add Things to pack
       </button>
       </Form.Group>

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
      <Form.Group>
        <Form.Label>Places To Visit</Form.Label>
        <Form.Control type="text" placeholder="Places to visit" id= "places_to_visit" value={this.state.places_to_visit} onChange={this.handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
   )
   else {
     console.log("redirecting");
    return <Redirect to={{ pathname: '/' }} />
   }

 }
}
export default withRouter(Forms)
