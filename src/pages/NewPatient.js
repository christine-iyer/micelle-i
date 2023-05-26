import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import UploadWidget from '../components/MicroComponents/UploadWidget';

export default function NewPatient() {
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
    <Form>
      <h1>New Patients</h1>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="string" placeholder="Phone" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
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

      <Row>
      <Form.Group as={Col} controlId="formGridID">
          <Form.Label>ID Type</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Drivers License</option>
            <option>State Issued ID</option>
            <option value="1">US Passport</option>
            <option value="1">Green Card</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridIDState">
          <Form.Label>ID Issuing State</Form.Label>
          <Form.Control type="string" placeholder="PhoformDridIDState"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridIDNumber">
          <Form.Label>ID Issuing State</Form.Label>
          <Form.Control type="string" placeholder="Enter ID including all slashes"/>
        </Form.Group>

      
      </Row>

      <Row>
    

        <Form.Group as={Col} controlId="formGridIDState">
          <Form.Label>Med Card State</Form.Label>
          <Form.Control type="string" placeholder="PhoformDridIDState"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridIDNumber">
          <Form.Label>Med Card ID </Form.Label>
          <Form.Control type="string" placeholder="Enter ID including all slashes"/>
        </Form.Group>
        <div className="container">
                <h2>Upload Med Card Photo</h2>
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
                        <image variant="top" src={url}id="uploadedimage" ></image>
                        <p className="url">{url}</p>
                    </div>
                )}
            </div>
            <div className="container">
                <h2>Upload Image of Photo ID</h2>
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
                        <img variant="top" src={url}id="uploadedimage" ></img>
                        <p className="url">{url}</p>
                    </div>
                )}
            </div>


      
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

