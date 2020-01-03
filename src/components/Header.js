import React from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// class Header extends React.Component {
//   render () {
//    return (
//     <Jumbotron fluid>
//       <h1 id="jumboTitle">Family Travel</h1>
//     </Jumbotron>
//    )}
// }

const Header = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <p>Hello guest</p>
	} else if (props.user.firstName) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.firstName}</strong>
			</p>
		)
	} else if (props.user.local.username) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.local.username} </strong>
			</p>
		)
	}
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}




export default Header
