// import React, { useState, useEffect } from "react";
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';



// export default function Expenses() {
//   const [validated, setValidated] = useState(false);

  





//   const [expense, setExpense] = useState({
//     accountPayable: '',
//     itemDescription: '',
//     itemAmount: '',
//     itemQuantity: '',
//     unitMeasure: '',
//     barter: false,
//     salesTax: ''
//   })
//   const handleChange = (event) => {
//     setExpense({ ...expense, [event.target.name]: event.target.value })
//   }

//   const [expenses, setExpenses] = useState([])

//   const createExpense = async () => {
//     try {
//       const response = await fetch('/api/expenses', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ ...expense })
//       })
//       const data = await response.json()
//       setExpense([data, ...expense])
//     } catch (error) {
//       console.error(error)
//     } finally {
//       setExpense({
//         accountPayable: '',
//         itemDescription: '',
//         itemAmount: '',
//         itemQuantity: '',
//         unitMeasure: '',
//         barter: '',
//         salesTax: ''
//       })
//     }
//   }
//   const listExpenses = async () => {
//     try {
//       const response = await fetch('/api/users/expenses', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',

//         }
//       })
//       const data = await response.json()
//       setExpenses(data)
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   const deletedExpense = async (id) => {
//     try {
//       const response = await fetch(`/api/expenses/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',

//         }
//       })
//       const data = await response.json()
//       const expensesCopy = [...expenses]
//       const index = expensesCopy.findIndex(expense => id === expense.id)
//       expensesCopy.splice(index, 1)
//       setExpenses(expensesCopy)
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   const updateExpense = async (id, updatedData) => {
//     try {
//       const response = await fetch(`/api/expenses/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',

//         },
//         body: JSON.stringify(updatedData)
//       })
//       const data = await response.json()
//       const expensesCopy = [...expenses]
//       const index = expensesCopy.findIndex(expense => id === expense.id)
//       expensesCopy[index] = { ...expensesCopy[index], ...updatedData }
//       setExpenses(expensesCopy)
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     setValidated(true);
//   };
//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <h1>Enter New Purchase</h1>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>Pay to the Order of</Form.Label>
//           <Form.Control
//             value={expenses.accountPayable}
//             onChange={handleChange}
//             type="text"
//             placeholder="Account Payable" />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationDescription">
//           <Form.Label>Description of Item or Service</Form.Label>
//           <Form.Control
//             onChange={handleChange}
//             value={expenses.itemDescription}
//             type="text" />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="2" controlId="validationAmount">
//           <Form.Label>Amount</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
//             <Form.Control
//               type="text"
//               aria-describedby="inputGroupPrepend"
//               value={expenses.itemAmount}
//               onChange={handleChange}
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a valid amount.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//         <Form.Group as={Col} md="1" controlId="validationQuantity">
//           <Form.Label>Quantity</Form.Label>
//           <InputGroup hasValidation>
//             <Form.Control
//               value={expenses.itemQuantity}
//               onChange={handleChange}
//               type="number"
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a valid quantity.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//         <Form.Group as={Col} md="2" controlId="validationUnitMeasure">
//           <Form.Label>Unit Measure</Form.Label>
//           <Form.Control
//             as='select'
//             type='text'
//             name='unitMeasure'
//             value={expenses.unitMeasure}
//             onChange={handleChange}
//             option={expenses.unitMeasure}
//           >
//             <option value="oz.">oz.</option>
//             <option value="gal">gal</option>
//             <option value="lb">lb</option>
//             <option value="cubicYard">cubic yard</option>
//             <option value="cubicFoot">cubic foot</option>
//             <option value="each">each</option>
//             <option value="other">other</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group as={Col} md="2" controlId="validationBarter">
//           <Form.Label>Barter?</Form.Label>
//           <Form.Check type="checkbox"
//             inline
//             value={expenses.barter}
//             onChange={handleChange}>
//           </Form.Check >
//         </Form.Group>
//         <Form.Group as={Col} md="1" controlId="validationTax">
//           <Form.Label>Tax </Form.Label>
//           <Form.Control
//             as='select'
//             type='text'
//             name='tax'
//             value={expenses.salesTax}
//             onChange={handleChange}>
//             <option value="five">5%</option>
//             <option value="eight">8%</option>
//             <option value="none">0%</option>
//           </Form.Control>
//         </Form.Group>
//       </Row>
//       <Button type="submit">Submit form</Button>
//     </Form>
//   );
// }

import { useState, useEffect } from 'react'

export default function Expenses (){
    const [expenses, setExpenses] = useState([])
    const [foundExpense, setFoundExpense] = useState(null)
    const [newExpense, setNewExpense] = useState({
              accountPayable: '',
              itemDescription: '',
              itemAmount: 0.00,
              itemQuantity: 0,
              unitMeasure: '',
              barter: false,
              salesTax: ''
    })
    // index
    const getExpenses = async () => {
        try {
            const response = await fetch('/api/expenses')
            const data = await response.json()
            setExpenses(data)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteExpense = async (id) => {
        try {
            const response = await fetch(`/api/expenses/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundExpense(data)
        } catch (error) {
            console.error(error)
        }
    }
    // update
    const updateExpense = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/expenses/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...updatedData})
            })
            const data = await response.json()
            setFoundExpense(data)
        } catch (error) {
            console.error(error)
        }
    }
    // create
        const createExpense = async () => {
            try {
                const response = await fetch(`/api/expenses`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...newExpense})
                })
                const data = await response.json()
                setFoundExpense(data)
                setNewExpense({
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
        setNewExpense({...newExpense, [evt.target.name]: evt.target.value})
    }

    useEffect(()=> {
        getExpenses()
    }, [foundExpense])

    return (
        <>
            {
                expenses && expenses.length ? (<ul>
                    {
                        expenses.map((expense) => {
                            return (
                                <li key={expense._id}>
                                    {expense.accountPayable} is {expense.unitMeasure} {expense.barter? 'Barter' : 'Cash'}
                                    <br/><button onClick={() => deleteExpense(expense._id)}>X</button>
                                </li>
                            )
                        })
                    }
                </ul>): <h1>No Expenses Yet Add One Below</h1>
            }
            {'Account Payable '}<input value={newExpense.accountPayable} onChange={handleChange} name="accountPayable"></input><br/>
            {'Description '}<input value={newExpense.itemDescription} onChange={handleChange} name="itemDescription"></input><br/>
            {'Quantity '}<input type="number" checked={newExpense.itemQuantity} onChange={handleChange}></input><br/>
            {'Item Amount '}<input value={newExpense.itemAmount} onChange={handleChange} name="itemAmount"></input><br/>
            {'Unit Measure '} 
            <select 
            value={newExpense.unitMeasure} 
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
            <input type="checkbox" checked={newExpense.barter} onChange={(evt) => setNewExpense({...newExpense, barter: evt.target.checked })}></input><br/>
            {'Sales Tax '}
            <select 
            value={newExpense.salesTax} 
            onChange={handleChange} 
            name="salesTax">
              <option value="5%">5%</option>
           <option value="8%">8%</option>
           <option value="0">0</option>

              
              </select><br/>
            <button onClick={() => createExpense() }>Create A New Expense</button>
            {
                foundExpense? <div>
                    <h1>{foundExpense.accountPayable}</h1>
                    <h2>{foundExpense.itemDescription}</h2>
                    <h3>{foundExpense.barter? 'Barter Customer': 'I will pay cash'}</h3>
                    <span>{foundExpense.itemQuantity} {foundExpense.salesTax} {foundExpense.itemDescription} {foundExpense.unitMeasure}</span>
                </div>: <>No Expense in Found Expense State</>
            }
        
            
        </>
    )
}

