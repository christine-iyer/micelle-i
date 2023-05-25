import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function NewPatient() {
  return (
    <Form>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="string" placeholder="Phone" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
            <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>

      </Row>

      <Row>
      <Form.Group as={Col} controlId="formGridID">
          <Form.Label>ID Type</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Drivers License</option>
            <option>State Issued ID</option>
            <option value="1">US Passport</option>
            <option value="1">Green Card</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridIDState">
          <Form.Label>ID Issuing State</Form.Label>
          <Form.Control type="string" placeholder="PhoformDridIDState"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridIDNumber">
          <Form.Label>ID Issuing State</Form.Label>
          <Form.Control type="string" placeholder="Enter ID including all slashes"/>
        </Form.Group>

      
      </Row>

      <Row>
    

        <Form.Group as={Col} controlId="formGridIDState">
          <Form.Label>Med Card State</Form.Label>
          <Form.Control type="string" placeholder="PhoformDridIDState"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridIDNumber">
          <Form.Label>Med Card ID </Form.Label>
          <Form.Control type="string" placeholder="Enter ID including all slashes"/>
        </Form.Group>

      
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

