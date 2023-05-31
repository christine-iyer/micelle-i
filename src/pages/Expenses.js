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

