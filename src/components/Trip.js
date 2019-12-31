import React from 'react';

class Trip extends React.Component {

render () {
return <>
    <div>
    <p>Trip Name:<span>{this.props.tripsData.name}</span></p>
    <p><span>Trip Date:</span><span>{this.props.tripsData.date}</span></p>
    <p><span>Trip Length of Stay:</span><span>{this.props.tripsData.length_of_stay}</span></p>
    </div>
  </>
}

}


export default Trip
