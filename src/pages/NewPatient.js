import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
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
    const getNewAccts = async () => {
        try {
            const response = await fetch('/api/newpts')
            const data = await response.json()
            setNewpts(data)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteNewAcct = async (id) => {
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
    const updateNewAcct = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/newpts/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...updatedData})
            })
            const data = await response.json()
            setFoundNewpt(data)
        } catch (error) {
            console.error(error)
        }
    }
    // create
        const createNewAcct = async () => {
            try {
                const response = await fetch(`/api/newpts`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...newpt})
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


    useEffect(()=> {
        getNewAccts()
    }, [foundNewpt])


  const [url, updateUrl] = useState("https://lolo.com");
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
  return (


    // <Form>
    //   <h1>New Patients</h1>
   
    //       <Form.Label>Name</Form.Label>

    //       <Form.Label>Email</Form.Label>
    //      
    //       <Form.Label>Phone</Form.Label>
   
    //     <Form.Label>Address</Form.Label>
   
    //       <Form.Label>City</Form.Label>
  
    //       <Form.Label>State</Form.Label>
    
    //         <option value="1">One</option>
    //         <option value="2">Two</option>
    //         <option value="3">Three</option>

    //       <Form.Label>Zip</Form.Label>
   
    //       <Form.Label>ID Type</Form.Label>
    //         <option>Drivers License</option>
    //         <option>State Issued ID</option>
    //         <option value="1">US Passport</option>
    //         <option value="1">Green Card</option>
   
    //       <Form.Label>ID ID State</Form.Label>
   
    //       <h2>Upload Med Card Photo</h2>
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

    //       {error && <p>{error}</p>}

    //       {url && (
    //         <div key={url._id} className='card' style={{ width: '18rem' }}
    //         >
    //           <image variant="top" src={url} id="uploadedimage" ></image>
    //           <p className="url">{url}</p>
    //         </div>
    //       )}
    //     </div>
    //     <div className="container">
    //       <h2>Upload Image of Photo ID</h2>
    //       <UploadWidget onUpload={handleOnUpload}>
    //         {({ open }) => {
    //           function handleOnClick(e) {
    //             e.preventDefault();
    //             open();
    //           }
    //           return (
    //             <button onClick={handleOnClick}>
    //               Upload an Image
    //             </button>
    //           )
    //         }}
    //       </UploadWidget>

    //       {error && <p>{error}</p>}

    //       {url && (
    //         <div key={url._id} className='card' style={{ width: '18rem' }}
    //         >
    //           <img variant="top" src={url} id="uploadedimage" ></img>
    //           <p className="url">{url}</p>
    //         </div>
    //       )}
    //     </div>



    //   </Row>

    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
  );
}

