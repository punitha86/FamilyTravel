import React from 'react';
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// TODO - add proptypes

const Home = props => {
if(props.user!==null)
{
		return (
			<Redirect to={{ pathname: '/main' }} />
		)
	} else {
		return (
			<Container >
			<Row className="justify-content-md-center">
			<p>If there's one time you want to be organized, it's when you're traveling. These tips for creating itineraries, packing carry-ons, and organizing your travel mementos will help make sure your trip goes smoothly. Cut the stress by taking a few simple steps to plan.</p>
			</Row>
			<Card>
			 	<Card.Title>Please Login!</Card.Title>
					<Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/08/13/09/43/data-1590455_960_720.jpg" />
				<Card.Body>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk
						of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Title>Use a Travel Planning Checklist</Card.Title>
					<Card.Img variant="top" src="https://www.brownelltravel.com/wp-content/uploads/2015/07/Carry-on-checklist.png" />
				<Card.Body>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk
						of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Title>Create an Itinerary</Card.Title>
					<Card.Img variant="top" src="https://p1.pxfuel.com/preview/971/234/463/map-tourist-travel-tourism-traveler-vacation.jpg" />
				<Card.Body>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk
						of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Title>Get Your Transportation Ready for the Trip</Card.Title>
					<Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/08/13/09/43/data-1590455_960_720.jpg" />
				<Card.Body>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk
						of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>

			</Container>
		)
	}

}

export default Home
