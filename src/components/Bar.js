import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Bar(props) {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
    <Nav className="nav">
      <Link to="/">
        <h1>Homepage</h1>
      </Link>
     
      <Link to="/revenue">
        <h1> Revenue </h1>
      </Link>
     

      <Link to="/expenses">
        <h1> Expense </h1>
      </Link>
 
      <Link to="/newplant">
        <h1> New Plant </h1>
      </Link>
   
      <Link to="/newnon">
        <h1> New Inventory Item </h1>
      </Link>
</Nav>
</Container>
</Navbar>
</>
  );
}