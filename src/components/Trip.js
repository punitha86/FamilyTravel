import React from 'react';
import axios from 'axios';
class Trip extends React.Component {
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

  handleUpdate = (id) => {
      axios.put('http://localhost:4500/trips/'+id)
    	.then(res => console.log(res))
  }
  handleDelete = (id) => {
      axios.delete('http://localhost:4500/trips/'+id)
      .then(res => {console.log(res);
      });

  }


render () {
return <table>
<tbody>
    <tr>
    <td>{this.props.tripsData.name}</td>
    <td>{this.props.tripsData.date}</td>
    <td>{this.props.tripsData.length_of_stay}</td>
    <td><button onClick={() => {
      this.handleUpdate(this.props.tripsData._id)
      }}>Edit</button>
    </td>
    <td><button onClick={() => {
      this.handleDelete(this.props.tripsData._id)
      }}>Delete</button></td>
    </tr>
    </tbody>
  </table>
}

}


export default Trip
