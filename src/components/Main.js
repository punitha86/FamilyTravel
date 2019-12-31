// packages
import React from 'react';
import Trip from '../components/Trip.js';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tripsData: []
    }
  }

  fetchTrips = () => {
      fetch(`http://localhost:4500/trips`)
      .then(data => data.json())
      .then(jData =>
          this.setState({tripsData:jData}),
      err=>console.log(err))
  }


  componentDidMount(){
    this.fetchTrips()
}
// ==============
// RENDER
// ==============
render () {
  // return <h1>Main</h1>

     return this.state.tripsData.map((trips) => (
      <Trip
       key={trips.id}
       tripsData={trips}
     />

   ))}

}
export default Main;
