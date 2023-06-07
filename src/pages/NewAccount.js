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
    description: ''
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
                    description: ''
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
        

            {'New Account Payable '}<input value={newacct.name} onChange={handleChange} name="name"></input><br/>
            {'Email '}<input value={newacct.email} onChange={handleChange} name="email"></input><br/>
            {'Phone '}<input value={newacct.phone} onChange={handleChange} name="phone"></input><br/>
            {'Address '}<input value={newacct.address} onChange={handleChange} name="address"></input><br/>
            {'City '}<input value={newacct.city} onChange={handleChange} name="city"></input><br/>
            {'State '}<input value={newacct.state} onChange={handleChange} name="state"></input><br/>
            {'Zip '}<input value={newacct.zip} onChange={handleChange} name="zip"></input><br/>
            {'Description '}<input value={newacct.description} onChange={handleChange} name="description"></input><br/>
           
           
            <button onClick={() => createNewAcct() }>Create A New New Acct</button>
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

{
                newaccts && newaccts.length ? (<ul>
                    {
                        newaccts.map((newacct) => {
                            return (

                             <div>
                                {/* <li key={newacct._id}>
                                    {newacct.name} is {newacct.description} {newacct.email}
                                    <br/><button onClick={() => deleteNewAcct(newacct._id)}>X</button>
                                    <br/><button onClick={() => updateNewAcct(newacct._id)}>Edit</button>
                                </li> */}
<table>
<thead>


<tr key={newacct._id}>
<th  >  {newacct.name}  </th>
<th >  {newacct.email} </th>
<th>{newacct.phone}   </th>
<th > {newacct.address}  </th>
<th > {newacct.city}  </th>
<th >  {newacct.state} </th>
<th >  {newacct.zip} </th>
<th >  {newacct.description} </th>
<th >  {newacct.zip} </th>
<th >  {newacct.description} </th>
<th scope='col' > <button onClick={() => deleteNewAcct(newacct._id)}>X</button> </th>
<th scope='col' >  <button onClick={() => updateNewAcct(newacct._id)}>Edit</button> </th>

</tr>
</thead>
</table>

<>


</>
</div>
                            )
                        })
                    }
                </ul>): <h1>No Expenses Yet Add One Below</h1>
            }
        
            
        </>
    )
}

