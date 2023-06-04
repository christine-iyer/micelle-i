import { useState, useEffect } from 'react'

export default function Revenues() {
  const [revenues, setRevenues] = useState([])
  const [foundRevenue, setFoundRevenue] = useState(null)
  const [newRevenue, setNewRevenue] = useState({
    accountReceivable: '',
    strain: '',
    itemCategory: '',
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
        body: JSON.stringify({ ...updatedData })
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
        body: JSON.stringify({ ...newRevenue })
      })
      const data = await response.json()
      setFoundRevenue(data)
      setNewRevenue({
        accountReceivable: '',
        strain: '',
        itemCategory: '',
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
    setNewRevenue({ ...newRevenue, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
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
                  {revenue.accountReceivable} is {revenue.unitMeasure} {revenue.barter ? 'Barter' : 'Cash'}
                  <br /><button onClick={() => deleteRevenue(revenue._id)}>X</button>
                </li>
              )
            })
          }
        </ul>) : <h1>No Revenues Yet Add One Below</h1>
      }
      {'Account Receivable '}<input value={newRevenue.accountReceivable} onChange={handleChange} name="accountReceivable"></input><br />
      {'Strain '}
      <select
        value={newRevenue.strain}
        onChange={handleChange}
        name="strain">
        <option value="Hybrid">Hybrid</option>
        <option value="Sativa">Sativa</option>
        <option value="Indica">Indica</option>
      </select><br />
      {'itemCategory '}
      <select
        value={newRevenue.itemCategory}
        onChange={handleChange}
        name="itemCategory">
        <option value="Raw Flower">Raw Flower</option>
        <option value="Concentrates">Concentrates</option>
        <option value="Edibles">Edibles</option>
        <option value="Consultation">Consultation</option>
      </select><br />
      {'Description '}<input value={newRevenue.itemDescription} onChange={handleChange} name="itemDescription"></input><br />
      {'Quantity '}<input type="number" checked={newRevenue.itemQuantity} onChange={handleChange} name="itemQuantity"></input><br />
      {'Item Amount '}<input value={newRevenue.itemAmount} onChange={handleChange} name="itemAmount"></input><br />
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
      </select><br />
      {'Barter '}
      <input type="checkbox" checked={newRevenue.barter} onChange={(evt) => setNewRevenue({ ...newRevenue, barter: evt.target.checked })}></input><br />
      {'Sales Tax '}
      <select
        value={newRevenue.salesTax}
        onChange={handleChange}
        name="salesTax">
        <option value="5%">5%</option>
        <option value="8%">8%</option>
        <option value="0">0</option>
      </select><br />
      <button onClick={() => createRevenue()}>Create A New Revenue</button>
      {
        foundRevenue ? <div>
          <h1>{foundRevenue.accountReceivable}</h1>
          <h2>{foundRevenue.itemDescription}</h2>
          <h3>{foundRevenue.barter ? 'Barter Customer' : 'I will pay cash'}</h3>
          <span>{foundRevenue.itemQuantity} {foundRevenue.salesTax} {foundRevenue.itemDescription} {foundRevenue.unitMeasure}</span>
        </div> : <>No Revenue in Found Revenue State</>
      }
    </>
  )
}





