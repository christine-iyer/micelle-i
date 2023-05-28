import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "react-datepicker/dist/react-datepicker.css";
import { FormControl } from "@mui/material";

export default function Expenses() {
  const [validated, setValidated] = useState(false);
  const [expense, setExpense] = useState({
    accountPayable: '',
    itemDescription: '',
    itemAmount: '',
    itemQuantity: '',
    unitMeasure: '',
    barter: false,
    salesTax: ''
})
const handleChange = (event) => {
  setExpense({ ...expense, [event.target.name]: event.target.value })
}

const [expenses, setExpenses] = useState([])

const createExpense = async () => {
  try {
      const response = await fetch('/api/expenses', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...expense })
      })
      const data = await response.json()
      setExpenses([data, ...expenses])
  } catch (error) {
      console.error(error)
  } finally {
      setExpense({
        accountPayable: '',
        itemDescription: '',
        itemAmount: '',
        itemQuantity: '',
        unitMeasure: '',
        barter: '',
        salesTax: ''
      })
  }
}
const listExpenses = async () => {
  try {
      const response = await fetch('/api/users/expenses', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
        
          }
      })
      const data = await response.json()
      setExpenses(data)
  } catch (error) {
      console.error(error)
  }
}
const deletedExpense = async (id) => {
  try {
      const response = await fetch(`/api/expenses/${id}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',

          }
      })
      const data = await response.json()
      const expensesCopy = [...expenses]
      const index = expensesCopy.findIndex(expense => id === expense.id)
      expensesCopy.splice(index, 1)
      setExpenses(expensesCopy)
  } catch (error) {
      console.error(error)
  }
}
const updateExpense = async (id, updatedData) => {
  try {
      const response = await fetch(`/api/expenses/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',

          },
          body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const expensesCopy = [...expenses]
      const index = expensesCopy.findIndex(expense => id === expense.id)
      expensesCopy[index] = { ...expensesCopy[index], ...updatedData }
      setExpenses(expensesCopy)
  } catch (error) {
      console.error(error)
  }
}

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
            value={expense.accountPayable}
            onChange={handleChange}
            type="text"
            placeholder="Account Name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationDescription">
          <Form.Label>Description of Item or Service</Form.Label>
          <Form.Control
           onChange={handleChange}
           value={expense.itemDescription}
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
             onChange={handleChange}
             value={expense.itemAmount}
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
                 value={expense.itemQuantity} 
             onChange={handleChange}
       
              type="string"
             
              
            />
            <Form.Control.Feedback type="invalid">
              Please choose a valid quantity.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationUnitMeasure">
          <Form.Label>Unit Measure</Form.Label>

          <Form.Control
                                as='select'
                                type='text'
                                name='unitMeasure'
                                value={expense.unitMeasure}

                                onChange={handleChange}>
                                <option value="oz.">oz.</option>
                                <option value="gal">gal</option>
                                <option value="lb">lb</option>
                                <option value="cubicYard">cubic yard</option>
                                <option value="cubicFoot">cubic foot</option>
                                <option value="each">each</option>
                                <option value="other">other</option>
                            </Form.Control>
          {/* <Form.Select defaultValue="Choose...">
            <option>oz.</option>
            <option>gal.</option>
            <option value="1">lb.</option>
            <option>cubic yard</option>
            <option>cubic foot</option>
            <option value="1">per each</option>
            <option value="1">Other...Please add in Description</option>
          </Form.Select> */}

        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationBarter">
          <Form.Label>Barter?</Form.Label>
          {/* <Form.Select defaultValue="Choose...">
            <option>No</option>
            <option>Yes</option>

          </Form.Select> */}
          <Form.Control
             onChange={handleChange}
             value={expense.barter}
              type= "boolean"
              
              required
            />
        </Form.Group>

        <Form.Group as={Col} md="1" controlId="validationUnitMeasure">
          <Form.Label>Tax </Form.Label>
          <Form.Control
                                as='select'
                                type='text'
                                name='unitMeasure'

                                onChange={handleChange}>
                                <option value="five">5%</option>
                                <option value="eight">8%</option>
                                <option value="none">0%</option>
                                
                            </Form.Control>

        </Form.Group>



        
      </Row>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

