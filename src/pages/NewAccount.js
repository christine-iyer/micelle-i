import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import newacct from '../../models/newacct';

export default function NewAccountReceivable() {
  const [newaccts, setNewaccts] = useState([])
  const [foundNewacct, setFoundNewacct] = useState(null)
  const [newNewacct, setNewNewacct] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    description: false
  })
  // index
  const getNewaccts = async () => {
    try {
      const response = await fetch('/api/newaccts')
      const data = await response.json()
      setNewaccts(data)
    } catch (error) {
      console.error(error)
    }
  }
  // delete
  const deleteNewacct = async (id) => {
    try {
      const response = await fetch(`/api/newaccts/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      setFoundNewacct(data)
    } catch (error) {
      console.error(error)
    }
  }
  // update
  const updateNewacct = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/newaccts/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...updatedData })
      })
      const data = await response.json()
      setFoundNewacct(data)
    } catch (error) {
      console.error(error)
    }
  }
  // create
  const createNewacct = async () => {
    try {
      const response = await fetch(`/api/newaccts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newNewacct })
      })
      const data = await response.json()
      setFoundNewacct(data)
      setNewNewacct({
        name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    description: false
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (evt) => {
    setNewNewacct({ ...newNewacct, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    getNewaccts()
  }, [foundNewacct])

  return (
    <>
   
    {/* {
      newaccts && newaccts.length ? (<ul>
        {
          newaccts.map((newacct) => {
            return (
              <li key={newacct._id}>
                {newacct.accountReceivable} is {newacct.unitMeasure} {newacct.barter ? 'Barter' : 'Cash'}
                <br /><button onClick={() => deleteNewacct(newacct._id)}>X</button>
              </li>
            )
          })
        }
      </ul>) : <h1>No Newaccts Yet Add One Below</h1>
    } */}

    
    <Form>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Business Name</Form.Label>
          <Form.Control 
          onChange={handleChange}
          value={newacct.name}
          type="text" 
          placeholder="Enter Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          onChange={handleChange}
          value={newacct.email}
          type="email" 
          placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control 
          onChange={handleChange}
          value={newacct.phone}
          type="text" 
          placeholder="Phone" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control 
        onChange={handleChange}
        value={newacct.address}
        type="text"
        placeholder="1234 Main St" />
      </Form.Group>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control 
          onChange={handleChange}
          value={newacct.city}
          type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control 
          onChange={handleChange}
          value={newacct.state}
          type="text"
          />

        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
          onChange={handleChange}
          value={newacct.zip}
          type="text"/>
        </Form.Group>

      </Row>

      <Row>
      <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Business Description</Form.Label>
          <Form.Control 
          onChange={handleChange}
          value={newacct.description}
          type="text"
          placeholder="Enter Description" />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

