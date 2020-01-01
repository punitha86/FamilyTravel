import React from 'react';

class Trip extends React.Component {

render () {
return <>
    <tr>
    <td>{this.props.tripsData.name}</td>
    <td>{this.props.tripsData.date}</td>
    <td>{this.props.tripsData.length_of_stay}</td>
    <td><button>Edit</button></td>
    <td><button>Delete</button></td>
    </tr>
  </>
}

}


export default Trip
