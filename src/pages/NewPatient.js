import { useState, useEffect } from 'react'
import UploadWidget from '../components/MicroComponents/UploadWidget';

export default function NewPatient() {
  const [newpts, setNewpts] = useState([])
  const [foundNewpt, setFoundNewpt] = useState(null)
  const [newpt, setNewpt] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    idType: '',
    idState: '',
    medCardState: '',
    dlUrl: '',
    medUrl: ''
  })
  const handleChange = (evt) => {
    setNewpt({ ...newpt, [evt.target.name]: evt.target.value })
  }

  // index
  const getNewPts = async () => {
    try {
      const response = await fetch('/api/newpts')
      const data = await response.json()
      setNewpts(data)
    } catch (error) {
      console.error(error)
    }
  }
  // delete
  const deleteNewPt = async (id) => {
    try {
      const response = await fetch(`/api/newpts/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      setFoundNewpt(data)
    } catch (error) {
      console.error(error)
    }
  }
  // update
  const updateNewPt = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/newpts/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...updatedData })
      })
      const data = await response.json()
      setFoundNewpt(data)
    } catch (error) {
      console.error(error)
    }
  }
  // create
  const createNewPt = async () => {
    try {
      const response = await fetch(`/api/newpts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newpt })
      })
      const data = await response.json()
      setFoundNewpt(data)
      setNewpt({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        idType: '',
        idState: '',
        medCardState: '',
        dlUrl: '',
        medUrl: ''
      })
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    getNewPts()
  }, [foundNewpt])


  const [url, updateUrl] = useState("https://lolo.com");
  const [urlMC, updateUrlMC] = useState("https://lolo.com");
  const [error, updateError] = useState();
  function handleOnUpload(error, result, widget) {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    console.dir(result);
    updateUrl(result?.info?.secure_url);
    console.dir(url);
}
function handleOnUploadMC(error, result, widget) {
  if (error) {
    updateError(error);
    widget.close({
      quiet: true
    });
    return;
  }
  console.dir(result);
  updateUrlMC(result?.info?.secure_url);
  console.dir(urlMC);
}
  return (
    <>

      {/* dlUrl: '',
      medUrl: '' */}

      {'New Patient Name'}<input value={newpt.name} onChange={handleChange} name="name"></input><br />
      {'Email '}<input value={newpt.email} onChange={handleChange} name="email"></input><br />
      {'Phone '}<input value={newpt.phone} onChange={handleChange} name="phone"></input><br />
      {'Address '}<input value={newpt.address} onChange={handleChange} name="address"></input><br />
      {'City '}<input value={newpt.city} onChange={handleChange} name="city"></input><br />
      {'State '}<input value={newpt.state} onChange={handleChange} name="state"></input><br />
      {'Zip '}<input value={newpt.zip} onChange={handleChange} name="zip"></input><br />
      {'Description '}<input value={newpt.description} onChange={handleChange} name="description"></input><br />
      {'Id State '}<input value={newpt.idState} onChange={handleChange} name="idState"></input><br />
      {'Med Card State '}<input value={newpt.medCardState} onChange={handleChange} name="medCardState"></input><br />
      {'Photo ID Type '}<select
        value={newpt.idType}
        onChange={handleChange}
        name="idType">
        <option value="Driver's License">Driver's License</option>
        <option value="State ID">State ID</option>
        <option value="US Passport">US Passport</option>
        <option value="Green Card">Creen Card</option>
      </select><br />
      {'ID Image '}<input value={url} onChange={handleChange} name="dlUrl"></input><br />
      {'Med Card Image '}<input value={urlMC} onChange={handleChange} name="medUrl"></input><br />
      


      <UploadWidget onUpload={handleOnUpload}>
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <button onClick={handleOnClick}>
              Upload an Image
            </button>
          )
        }}
      </UploadWidget>

      {error && <p>{error}</p>}

      {url && (
        <div key={url._id} className='card' style={{ width: '18rem' }}
        >
          <img variant="top" src={url} id="uploadedimage" ></img>
          <p className="url">{url}</p>
        </div>
      )}

<UploadWidget onUpload={handleOnUpload}>
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <button onClick={handleOnClick}>
              Upload Photo Med Card
            </button>
          )
        }}
      </UploadWidget>

      {error && <p>{error}</p>}

      {urlMC && (
        <div key={urlMC._id} className='card' style={{ width: '18rem' }}
        >
          <img variant="top" src={urlMC} id="uploadedimage" ></img>
          <p className="urlMC">{urlMC}</p>
        </div>
      )}





      <button onClick={() => createNewPt()}>Create A New NewPt</button>
      {
        foundNewpt ? <div>
          <h2>{foundNewpt.name}</h2>
          <h2>{foundNewpt.email}</h2>
          <h2>{foundNewpt.phone}</h2>
          <h2>{foundNewpt.address}</h2>
          <h2>{foundNewpt.city}</h2>
          <h2>{foundNewpt.state}</h2>
          <h2>{foundNewpt.zip}</h2>
          <h2>{foundNewpt.description}</h2>
          <h2>{foundNewpt.idState}</h2>
          <h2>{foundNewpt.medCardState}</h2>
          <h2>{foundNewpt.idType}</h2>

        </div> : <>No New Accounts Found </>
      }



    </>
  )
}

