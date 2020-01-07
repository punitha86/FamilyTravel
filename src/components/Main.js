// packages
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// let baseUrl = '';
// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://localhost:4500'
// } else {
  //
// }
//let baseUrl = 'http://localhost:4500';
let baseUrl = 'https://cors-anywhere.herokuapp.com/https://familytravel.herokuapp.com';


////populating the trips////////////////////////////
const Trip = props => (
    <tr>
        <td>{props.tripsData.name}</td>
        <td>{props.tripsData.date}</td>
        <td>{props.tripsData.places_to_visit}</td>
        <td> <TripModal triId={props.tripsData}/> </td>
        <td>
            <Link to={"/edit/"+props.tripsData._id}>Edit</Link>
        </td>
        <td>
        <a href="#" onClick={() =>
          {props.handleDelete(props.tripsData._id)}
        }> Delete </a>
        </td>
    </tr>
)


const TripModal = (property) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
    <>
      <a href="#" onClick={handleShow}>
        Details
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><span id="modalTitle">{property.triId.name}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Length Of Trip:  <span id="modalText">{property.triId.length_of_stay}</span></h5>
            <h5>Places: <span id="modalText">{property.triId.places_to_visit}</span></h5>
            <h5>Trip Start Date: <span id="modalText">{property.triId.date}</span></h5>
          {/*}///checking if the length of the things to pack is not 0
          */}
            {property.triId.things_to_pack.length!==0 ?
            (<>
              <h5>Things To Do</h5>
            {property.triId.things_to_pack.map((thing,index) => {
              return <li key={index}>{thing.packName}</li>
            })}
          </>)
            :<></>}
            </Modal.Body>

      </Modal>
    </>
  );
}


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tripsData: []
    }
  }


  fetchTrips = () => {
  console.log(this.props.user);
  let temp_username= (this.props.user.firstName)?this.props.user.firstName:this.props.user.local.username;
    axios.get(`${baseUrl}/trips/user/`+temp_username)
    .then(response => {
        this.setState({tripsData: response.data});
    })
    .catch(function (error) {
        console.log(error);
    })
  }


  handleDelete = (id) => {
    console.log("Delete triggered");
      axios.delete(`${baseUrl}/trips/`+id)
      .then(res => {console.log(res);this.fetchTrips();
      });

  }

  componentDidMount(){
    if(this.props.user!==null)
    this.fetchTrips()


}


tripList() {
    return this.state.tripsData.map((trips)=> {
        return <Trip
         key={trips._id}
         tripsData={trips}
         handleDelete={this.handleDelete}
       />;
    });
}

// ==============
// RENDER
// ==============
render () {
  // return <h1>Main</h1>
if(this.props.user!==null)
  return (
       <div>
           <table className="table table-striped" style={{ marginTop: 20 }}>
               <thead>
                   <tr>
                       <th>Name of the Trip</th>
                       <th>Date</th>
                       <th>Places Of Trip</th>
                       <th colSpan="3">Actions</th>
                   </tr>
               </thead>
               <tbody>
                   { this.tripList() }
               </tbody>
           </table>
       </div>
   )
   else {
     console.log("redirecting");
    return <Redirect to={{ pathname: '/' }} />
   }
   }


}
export default Main;


// fetchTrips = () => {
//     fetch(`http://localhost:4500/trips`)
//     .then(data => data.json())
//     .then(jData =>
//         this.setState({tripsData:jData}),
//     err=>console.log(err))
// }
