// packages
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Trip = props => (
    <tr>
        <td>{props.tripsData.name}</td>
        <td>{props.tripsData.date}</td>
        <td>{props.tripsData.length_of_stay}</td>
        <td>
            <Link to={"/edit/"+props.tripsData._id}>Edit</Link>
            <p onClick={() =>
              {props.handleDelete(props.tripsData._id)}
            }> Delete</p>
        </td>
    </tr>
)
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tripsData: []
    }
  }
  fetchTrips = () => {
    axios.get('http://localhost:4500/trips')
    .then(response => {
        this.setState({tripsData: response.data});
    })
    .catch(function (error) {
        console.log(error);
    })
  }

  // fetchTrips = () => {
  //     fetch(`http://localhost:4500/trips`)
  //     .then(data => data.json())
  //     .then(jData =>
  //         this.setState({tripsData:jData}),
  //     err=>console.log(err))
  // }
  handleDelete = (id) => {
    console.log("Delete triggered");
      axios.delete('http://localhost:4500/trips/'+id)
      .then(res => {console.log(res);this.fetchTrips();
      });

  }

  componentDidMount(){
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

  return (
       <div>
           <table className="table table-striped" style={{ marginTop: 20 }}>
               <thead>
                   <tr>
                       <th>Name of the Trip</th>
                       <th>Date</th>
                       <th>Length Of Trip</th>
                       <th>Actions</th>
                   </tr>
               </thead>
               <tbody>
                   { this.tripList() }
               </tbody>
           </table>
       </div>
   )
 }

}
export default Main;
