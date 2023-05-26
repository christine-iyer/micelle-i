import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "react-datepicker/dist/react-datepicker.css";

export default function Expenses() {
  const [validated, setValidated] = useState(false);
  // const [startDate, setStartDate] = useState('');


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h1>Enter New Purchase</h1>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Pay to the Order of</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Account Name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationDescription">
          <Form.Label>Description of Item or Service</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Provide a brief description of the receipt" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} md="2" controlId="validationAmount">
          <Form.Label>Amount</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="00.00"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a valid amount.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="1" controlId="validationQuantity">
          <Form.Label>Quantity</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="1"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a valid quantity.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationUnitMeasure">
          <Form.Label>Unit Measure</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>oz.</option>
            <option>gal.</option>
            <option value="1">lb.</option>
            <option>cubic yard</option>
            <option>cubic foot</option>
            <option value="1">per each</option>
            <option value="1">Other...Please add in Description</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationBarter">
          <Form.Label>Barter?</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>No</option>
            <option>Yes</option>

          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="1" controlId="validationUnitMeasure">
          <Form.Label>Tax </Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>5%</option>
            <option>8%</option>
            <option>0%</option>

          </Form.Select>
        </Form.Group>



        
      </Row>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

