import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Bar(props) {
  return (
    <>
    <Navbar  className="navbar-left" bg="light" variant="light" width='100%'>
      <Container>
    <Nav >
      <Link to="/">
        <h1>Table</h1>
      </Link>
     
      <Link to="/revenues">
        <h1>Revenue</h1>
      </Link>
     

      <Link to="/expenses">
        <h1>Expense</h1>
      </Link>
 
      <Link to="/inventory">
        <h1>New Inventory</h1>
      </Link>
   
      <Link to="/newaccts">
        <h1>New Account</h1>
      </Link>
      <Link to="/newpts">
        <h1>New Patient</h1>
      </Link>
</Nav>

</Container>
</Navbar>
</>
  );
}