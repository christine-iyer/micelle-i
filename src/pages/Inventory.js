import { useState, useEffect } from 'react'
import { Cloudinary } from "@cloudinary/url-gen";
import UploadWidget from '../components/MicroComponents/UploadWidget';
import CreateInventory from '../components/Inventory/CreateInventory'
import InventoryList from '../components/Inventory/InventoryList'

export default function Inventory () {

  const handleChange = (event) => {
    setInventory({ ...inventory, [event.target.name]: event.target.value })
  }
  
  const [inventory, setInventory] = useState({
     name: '',
     strain: '',
     productCategory: '',
     inventoryName: '',
     itemDetail: '',
     unitMeasure: '',
     unitOnHand: 1,
     unitCost: 10.99,
     targetQuantity: 1,
     newPlant: false,
     plantOrigin: '',
     plantOriginDate: '',
     plantStage: '',
     image: ''
  })
  const [inventorys, setInventorys] = useState([])

  const createInventory = async () => {
    try {
      const response = await fetch('/api/inventorys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({ ...inventory })
      })
      const data = await response.json()
      setInventorys([data, ...inventorys])
    } catch (error) {
      console.error(error)
    } finally {
      setInventory({
          name: '',
          strain: '',
          productCategory: '',
          inventoryName: '',
          itemDetail: '',
          unitMeasure: '',
          unitOnHand: 1,
          unitCost: 10.99,
          targetQuantity: 1,
          newPlant: false,
          plantOrigin: '',
          plantOriginDate: '',
          plantStage: '',
          image: ''
      })
    }
  }
  const listInventorys = async () => {
    try {
      const response = await fetch('/api/users/inventorys', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.json()
      setInventorys(data)
    } catch (error) {
      console.error(error)
    }
  }
  const deleteInventory = async (id) => {
    try {
      const response = await fetch(`/api/inventorys/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          
        }
      })
      const data = await response.json()
      const inventorysCopy = [...inventorys]
      const index = inventorysCopy.findIndex(inventory => id === inventory._id)
      inventorysCopy.splice(index, 1)
      setInventorys(inventorysCopy)
    } catch (error) {
      console.error(error)
    }
  }
  const updateInventory = async (id, updatedData,e) => {
    try {
      const response = await fetch(`/api/inventorys/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const inventorysCopy = [...inventorys]
      const index = inventorysCopy.findIndex(inventory => id === inventory._id)
      inventorysCopy[index].text = e.target.value
      setInventorys(...inventorysCopy)
    } catch (error) {
      console.error(error)
    }
  }

  const [url, updateUrl] = useState(false);
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
    setInventory({
      name: '',
      strain: '',
      productCategory: '',
      inventoryName: '',
      itemDetail: '',
      unitMeasure: '',
      unitOnHand: 1,
      unitCost: 10.99,
      targetQuantity: 1,
      newPlant: false,
      plantOrigin: '',
      plantOriginDate: '',
      plantStage: '',
      image: result?.info?.secure_url
    })
  }



  return (
    <>
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
          <img variant="top" src={url} id="uploadedimage"  ></img>
          <p className="url">{url}</p>
        </div>
      )}
 
      <CreateInventory
        createInventory={createInventory}
        inventory={inventory}
        handleChange={handleChange}
      />
      <InventoryList
        inventorys={inventorys}
        deleteInventory={deleteInventory}
        updateInventory={updateInventory}
      />
    </>
  )
}