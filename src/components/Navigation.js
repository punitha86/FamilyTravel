import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


class Navigation extends React.Component {
render(){
  return <Navbar bg="light" expand="lg">
    <Navbar.Brand>Hello Family!</Navbar.Brand>
    
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link  href="#">Home</Nav.Link>
        <Button>
        <Nav.Link  href="http://localhost:4500/auth/google"> Login with Google+ </Nav.Link>
        </Button>
      </Nav>
      <Nav.Link onClick={() => {
      }}>Trips</Nav.Link>
    </Navbar.Collapse>
  </Navbar>
}
}


export default Navigation;
