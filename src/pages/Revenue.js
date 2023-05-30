


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Input from 'react-phone-number-input/input'



export default function Revenue() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Payor Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Payor Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control placeholder="xxx-xxx-xxxx" />
      </Form.Group>


      </Row>

     

      

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="formGridState">
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

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}


import { useState, useEffect } from 'react'

export default function Revenues (){
    const [revenues, setRevenues] = useState([])
    const [foundRevenue, setFoundRevenue] = useState(null)
    const [newRevenue, setNewRevenue] = useState({
              accountPayable: '',
              itemDescription: '',
              itemAmount: 0.00,
              itemQuantity: 0,
              unitMeasure: '',
              barter: false,
              salesTax: ''
    })
    // index
    const getRevenues = async () => {
        try {
            const response = await fetch('/api/revenues')
            const data = await response.json()
            setRevenues(data)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteRevenue = async (id) => {
        try {
            const response = await fetch(`/api/revenues/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundRevenue(data)
        } catch (error) {
            console.error(error)
        }
    }
    // update
    const updateRevenue = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/revenues/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...updatedData})
            })
            const data = await response.json()
            setFoundRevenue(data)
        } catch (error) {
            console.error(error)
        }
    }
    // create
        const createRevenue = async () => {
            try {
                const response = await fetch(`/api/revenues`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...newRevenue})
                })
                const data = await response.json()
                setFoundRevenue(data)
                setNewRevenue({
                  accountPayable: '',
                  itemDescription: '',
                  itemAmount: 0.00,
                  itemQuantity: 0,
                  unitMeasure: '',
                  barter: false,
                  salesTax: ''
                })
            } catch (error) {
                console.error(error)
            }
        }

    const handleChange = (evt) => {
        setNewRevenue({...newRevenue, [evt.target.name]: evt.target.value})
    }

    useEffect(()=> {
        getRevenues()
    }, [foundRevenue])

    return (
        <>
            {
                revenues && revenues.length ? (<ul>
                    {
                        revenues.map((revenue) => {
                            return (
                                <li key={revenue._id}>
                                    {revenue.accountPayable} is {revenue.unitMeasure} {revenue.barter? 'Barter' : 'Cash'}
                                    <br/><button onClick={() => deleteRevenue(revenue._id)}>X</button>
                                </li>
                            )
                        })
                    }
                </ul>): <h1>No Revenues Yet Add One Below</h1>
            }
            {'Account Payable '}<input value={newRevenue.accountPayable} onChange={handleChange} name="accountPayable"></input><br/>
            {'Description '}<input value={newRevenue.itemDescription} onChange={handleChange} name="itemDescription"></input><br/>
            {'Quantity '}<input type="number" checked={newRevenue.itemQuantity} onChange={handleChange}></input><br/>
            {'Item Amount '}<input value={newRevenue.itemAmount} onChange={handleChange} name="itemAmount"></input><br/>
            {'Unit Measure '} 
            <select 
            value={newRevenue.unitMeasure} 
            onChange={handleChange} 
            name="unitMeasure">
           <option value="oz.">oz.</option>
           <option value="gal">gal</option>
           <option value="lb">lb</option>
           <option value="cubicYard">cubic yard</option>
           <option value="cubicFoot">cubic foot</option>
           <option value="each">each</option>
           <option value="other">other</option>
              
              
              </select><br/>
            {'Barter '}
            <input type="checkbox" checked={newRevenue.barter} onChange={(evt) => setNewRevenue({...newRevenue, barter: evt.target.checked })}></input><br/>
            {'Sales Tax '}
            <select 
            value={newRevenue.salesTax} 
            onChange={handleChange} 
            name="salesTax">
              <option value="5%">5%</option>
           <option value="8%">8%</option>
           <option value="0">0</option>

              
              </select><br/>
            <button onClick={() => createRevenue() }>Create A New Revenue</button>
            {
                foundRevenue? <div>
                    <h1>{foundRevenue.accountPayable}</h1>
                    <h2>{foundRevenue.itemDescription}</h2>
                    <h3>{foundRevenue.barter? 'Barter Customer': 'I will pay cash'}</h3>
                    <span>{foundRevenue.itemQuantity} {foundRevenue.salesTax} {foundRevenue.itemDescription} {foundRevenue.unitMeasure}</span>
                </div>: <>No Revenue in Found Revenue State</>
            }
        
            
        </>
    )
}



