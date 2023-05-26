import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Bar(props) {
  return (
    <>
    <Navbar  bsStyle="tabs" className="navbar-left" bg="light" variant="light" width='100%'>
      <Container>
    <Nav >
      <Link to="/">
        <h1>Inventory</h1>
      </Link>
     
      <Link to="/revenue">
        <h1>Revenue</h1>
      </Link>
     

      <Link to="/expenses">
        <h1>Expense</h1>
      </Link>
 
      <Link to="/newplant">
        <h1>New Plant</h1>
      </Link>
   
      <Link to="/newnon">
        <h1>New Inventory</h1>
      </Link>
      <Link to="/newacct">
        <h1>New Account</h1>
      </Link>
      <Link to="/newpt">
        <h1>New Patient</h1>
      </Link>
</Nav>

</Container>
</Navbar>
</>
  );
}