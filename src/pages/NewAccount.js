// import { useState, useEffect } from 'react'
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';


// export default function NewAccountReceivable() {
//   const [newaccts, setNewaccts] = useState([])
//   const [foundNewacct, setFoundNewacct] = useState(null)
//   const [newacct, setNewacct] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     zip: '',
//     description: ''
//   })
//   // index
//   const getNewaccts = async () => {
//     try {
//       const response = await fetch('/api/newaccts')
//       const data = await response.json()
//       setNewaccts(data)
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   // delete
//   const deleteNewacct = async (id) => {
//     try {
//       const response = await fetch(`/api/newaccts/${id}`, {
//         method: "DELETE",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       const data = await response.json()
//       setFoundNewacct(data)
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   // update
//   const updateNewacct = async (id, updatedData) => {
//     try {
//       const response = await fetch(`/api/newaccts/${id}`, {
//         method: "PUT",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ ...updatedData })
//       })
//       const data = await response.json()
//       setFoundNewacct(data)
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   // create
//   const createNewacct = async () => {
//     try {
//       const response = await fetch(`/api/newaccts`, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ ...newacct })
//       })
//       const data = await response.json()
//       setFoundNewacct(data)
//       setNewacct({
//         name: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     zip: '',
//     description: ''
//       })
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const handleChange = (evt) => {
//     setNewacct({ ...newacct, [evt.target.name]: evt.target.value })
//   }

//   useEffect(() => {
//     getNewaccts()
//   }, [foundNewacct])

//   return (
//     <>
   
//     {/* {
//       newaccts && newaccts.length ? (<ul>
//         {
//           newaccts.map((newacct) => {
//             return (
//               <li key={newacct._id}>
//                 {newacct.accountReceivable} is {newacct.unitMeasure} {newacct.barter ? 'Barter' : 'Cash'}
//                 <br /><button onClick={() => deleteNewacct(newacct._id)}>X</button>
//               </li>
//             )
//           })
//         }
//       </ul>) : <h1>No Newaccts Yet Add One Below</h1>
//     } */}

    
//     <Form>
//       <Row className="mb-3">
//       <Form.Group as={Col} controlId="formGridName">
//           <Form.Label>Business Name</Form.Label>
//           <Form.Control 
//           onChange={handleChange}
//           value={newacct.name}
//           type="text" 
//           placeholder="Enter Name" />
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control 
//           onChange={handleChange}
//           value={newacct.email}
//           type="email" 
//           placeholder="Email" />
//         </Form.Group>

//         <Form.Group as={Col} controlId="formPhone">
//           <Form.Label>Phone</Form.Label>
//           <Form.Control 
//           onChange={handleChange}
//           value={newacct.phone}
//           type="text" 
//           placeholder="Phone" />
//         </Form.Group>
//       </Row>

//       <Form.Group className="mb-3" controlId="formGridAddress1">
//         <Form.Label>Address</Form.Label>
//         <Form.Control 
//         onChange={handleChange}
//         value={newacct.address}
//         type="text"
//         placeholder="1234 Main St" />
//       </Form.Group>


//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridCity">
//           <Form.Label>City</Form.Label>
//           <Form.Control 
//           onChange={handleChange}
//           value={newacct.city}
//           type="text"/>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridState">
//           <Form.Label>State</Form.Label>
//           <Form.Control 
//           onChange={handleChange}
//           value={newacct.state}
//           type="text"
//           />

//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control 
//           onChange={handleChange}
//           value={newacct.zip}
//           type="text"/>
//         </Form.Group>

//       </Row>

//       <Row>
//       <Form.Group as={Col} controlId="formGridName">
//           <Form.Label>Business Description</Form.Label>
//           <Form.Control 
//           onChange={handleChange}
//           value={newacct.description}
//           type="text"
//           placeholder="Enter Description" />
//         </Form.Group>
//       </Row>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </>
//   );
// }

import { useState, useEffect } from 'react'

export default function Expenses (){

  const [newaccts, setNewaccts] = useState([])
  const [foundNewacct, setFoundNewacct] = useState(null)
  const [newacct, setNewacct] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    description: ''
    })
    // index
    const getExpenses = async () => {
        try {
            const response = await fetch('/api/newaccts')
            const data = await response.json()
            setNewaccts(data)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteExpense = async (id) => {
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
    const updateExpense = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/newaccts/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...updatedData})
            })
            const data = await response.json()
            setFoundNewacct(data)
        } catch (error) {
            console.error(error)
        }
    }
    // create
        const createExpense = async () => {
            try {
                const response = await fetch(`/api/newaccts`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...newacct})
                })
                const data = await response.json()
                setFoundNewacct(data)
                setNewacct({
                  name: '',
                  email: '',
                  phone: '',
                  address: '',
                  city: '',
                  state: '',
                  zip: '',
                  description: ''
                })
            } catch (error) {
                console.error(error)
            }
        }

    const handleChange = (evt) => {
        setNewacct({...newacct, [evt.target.name]: evt.target.value})
    }

    useEffect(()=> {
        getExpenses()
    }, [foundNewacct])

    return (
        <>
            {
                newaccts && newaccts.length ? (<ul>
                    {
                        newaccts.map((newacct) => {
                            return (
                                <li key={newacct._id}>
                                    {newacct.accountPayable} is {newacct.unitMeasure} {newacct.barter? 'Barter' : 'Cash'}
                                    <br/><button onClick={() => deleteExpense(newacct._id)}>X</button>
                                </li>
                            )
                        })
                    }
                </ul>): <h1>No Expenses Yet Add One Below</h1>
            }
            {'Account Payable '}<input value={newacct.accountPayable} onChange={handleChange} name="accountPayable"></input><br/>
            {'Description '}<input value={newacct.itemDescription} onChange={handleChange} name="itemDescription"></input><br/>
            {'Quantity '}<input type="number" checked={newacct.itemQuantity} onChange={handleChange}></input><br/>
            {'Item Amount '}<input value={newacct.itemAmount} onChange={handleChange} name="itemAmount"></input><br/>
            {'Unit Measure '} 
            <select 
            value={newacct.unitMeasure} 
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
            <input type="checkbox" checked={newacct.barter} onChange={(evt) => setNewacct({...newacct, barter: evt.target.checked })}></input><br/>
            {'Sales Tax '}
            <select 
            value={newacct.salesTax} 
            onChange={handleChange} 
            name="salesTax">
              <option value="5%">5%</option>
           <option value="8%">8%</option>
           <option value="0">0</option>

              
              </select><br/>
            <button onClick={() => createExpense() }>Create A New Expense</button>
            {
                foundNewacct? <div>
                    <h1>{foundNewacct.accountPayable}</h1>
                    <h2>{foundNewacct.itemDescription}</h2>
                    <h3>{foundNewacct.barter? 'Barter Customer': 'I will pay cash'}</h3>
                    <span>{foundNewacct.itemQuantity} {foundNewacct.salesTax} {foundNewacct.itemDescription} {foundNewacct.unitMeasure}</span>
                </div>: <>No Expense in Found Expense State</>
            }
        
            
        </>
    )
}

