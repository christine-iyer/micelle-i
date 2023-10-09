import { useState, useEffect, useRef } from 'react'

export const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Email',
        accessor: 'email',
    },
    {
        Header: 'Phone',
        accessor: 'phone',
    },
    {
        Header: 'Address',
        accessor: 'address',
    },
    {
        Header: 'City',
        accessor: 'city',
    },
    {
        Header: 'State',
        accessor: 'state',
    },
    {
        Header: 'Zip',
        accessor: 'zip',
    },
    {
        Header: 'Description',
        accessor: 'description',
    }
];
export default function NewAccts() {
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
    const ref = useRef(null)
    const inputRef = useRef(null)
    
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
                body: JSON.stringify({ updatedData })
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
                body: JSON.stringify({ ...newacct })
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
    useEffect(() => {
        getNewAccts()
    }, [foundNewacct])

    return (
        <>
            {'New Account Payable '}<input value={newacct.name} onChange={handleChange} name="name"></input><br />
            {'Email '}<input value={newacct.email} onChange={handleChange} name="email"></input><br />
            {'Phone '}<input value={newacct.phone} onChange={handleChange} name="phone"></input><br />
            {'Address '}<input value={newacct.address} onChange={handleChange} name="address"></input><br />
            {'City '}<input value={newacct.city} onChange={handleChange} name="city"></input><br />
            {'State '}<input value={newacct.state} onChange={handleChange} name="state"></input><br />
            {'Zip '}<input value={newacct.zip} onChange={handleChange} name="zip"></input><br />
            {'Description '}<input value={newacct.description} onChange={handleChange} name="description"></input><br />
            <button onClick={() => createNewAcct()}>Create A New New Acct</button>
            {
                foundNewacct ? <div>
                    <h2>{foundNewacct.name}</h2>
                    <h2>{foundNewacct.email}</h2>
                    <h2>{foundNewacct.phone}</h2>
                    <h2>{foundNewacct.address}</h2>
                    <h2>{foundNewacct.city}</h2>
                    <h2>{foundNewacct.state}</h2>
                    <h2>{foundNewacct.zip}</h2>
                    <h2>{foundNewacct.description}</h2>
                </div> : <>No New Accounts Found </>
            }
            <hr></hr>
            {
                newaccts && newaccts.length ? (<ul>
                    {
                        newaccts.map((newacct) => {
                            return (
                                <div key={newacct._id}>
                                    <table>
                                        <thead>
                                            <tr >
                                                <td>  {newacct.name}  </td>
                                                <td>  {newacct.email} </td>
                                                <td>{newacct.phone}   </td>
                                                <td> {newacct.address}  </td>
                                                <td> {newacct.city}  </td>
                                                <td>  {newacct.state} </td>
                                                <td>  {newacct.zip} </td>
                                                <td>  {newacct.description} </td>
                                                <td>  {newacct.zip} </td>
                                                <td>  {newacct.description} </td>
                                                <td> <button onClick={() => deleteNewAcct(newacct._id)}>X</button> </td>
                                                <td>  <button onClick={() => updateNewAcct(newacct._id)}>Edit</button> </td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            )
                        })
                    }
                </ul>) : <h1>No Expenses Yet Add One</h1>
            }
        </>
    )
}

