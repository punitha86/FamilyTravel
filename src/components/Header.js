import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


const Header = props => {

	let Greeting
	if (props.user === null) {
		Greeting = <span></span>
	} else if (props.user.firstName) {
		Greeting = (
			<Container>
			<Row>
						<Col xs={3} md={2}>
		      		<Image src={props.user.photos[0].value} thumbnail />
		    		</Col>
						<Col>
							<span>Welcome <strong>{props.user.firstName}</strong>	</span>
						</Col>
			</Row>
			</Container>
		)
	} else if (props.user.local.username) {
		Greeting = (
			<p>
				Welcome <strong>{props.user.local.username} </strong>
			</p>
		)
	}
	return (
		<div className="Header">
		<Jumbotron fluid>
			<h1 id="jumboTitle">Family Travel</h1>
		</Jumbotron>
			{Greeting}
		</div>
	)
}




export default Header
