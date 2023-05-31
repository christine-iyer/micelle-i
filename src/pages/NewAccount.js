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

export default function NewAccts (){

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
    description: '',
    licenseNum: '',
    licenseSt: '',
    medCardSt: '',
    dlLiscUrl: '',
    medCardUrl: ''
    })
    const handleChange = (evt) => {
    setNewacct({ ...newacct, [evt.target.name]: evt.target.value })
  }
    
    // index
    const getNewAccts = async () => {
        try {
            const response = await fetch('/api/newaccts')
            const data = await response.json()
            setNewaccts(data)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteNewAcct = async (id) => {
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
    const updateNewAcct = async (id, updatedData) => {
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
        const createNewAcct = async () => {
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
                    description: '',
                    licenseNum: '',
                    licenseSt: '',
                    medCardSt: '',
                    dlLiscUrl: '',
                    medCardUrl: ''
                })
            } catch (error) {
                console.error(error)
            }
        }


    useEffect(()=> {
        getNewAccts()
    }, [foundNewacct])

    return (
        <>
            {
                newaccts && newaccts.length ? (<ul>
                    {
                        newaccts.map((newacct) => {
                            return (
                                <li key={newacct._id}>
                                    {newacct.name} is {newacct.unitMeasure} {newacct.barter? 'Barter' : 'Cash'}
                                    <br/><button onClick={() => deleteNewAcct(newacct._id)}>X</button>
                                </li>
                            )
                        })
                    }
                </ul>): <h1>No NewAccts Yet Add One Below</h1>
            }
            {'New Account Payable '}<input value={newacct.name} onChange={handleChange} name="name"></input><br/>
            {'Email '}<input value={newacct.email} onChange={handleChange} name="email"></input><br/>
            {'Phone '}<input value={newacct.phone} onChange={handleChange} name="phone"></input><br/>
            {'Address '}<input value={newacct.address} onChange={handleChange} name="address"></input><br/>
            {'City '}<input value={newacct.city} onChange={handleChange} name="city"></input><br/>
            {'State '}<input value={newacct.state} onChange={handleChange} name="state"></input><br/>
            {'Zip '}<input value={newacct.zip} onChange={handleChange} name="zip"></input><br/>
            {'Description '}<input value={newacct.description} onChange={handleChange} name="description"></input><br/>
            {'DL State '}<input value={newacct.licenseSt} onChange={handleChange} name="licenseSt"></input><br/>
            {'Zip '}<input value={newacct.medCardSt} onChange={handleChange} name="medCardSt"></input><br/>
            {'Description '}<input value={newacct.description} onChange={handleChange} name="description"></input><br/>
            
           
            <button onClick={() => createNewAcct() }>Create A New NewAcct</button>
            {
                foundNewacct? <div>
                     <h2>{foundNewacct.name}</h2>
                    <h2>{foundNewacct.email}</h2>
                    <h2>{foundNewacct.phone}</h2>
                    <h2>{foundNewacct.address}</h2>
                    <h2>{foundNewacct.city}</h2>
                    <h2>{foundNewacct.state}</h2>
                    <h2>{foundNewacct.zip}</h2>
                    <h2>{foundNewacct.description}</h2>
                </div>: <>No New Accounts Found </>
            }
        
            
        </>
    )
}

