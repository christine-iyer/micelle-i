import { useState, useEffect } from 'react'
import { Cloudinary } from "@cloudinary/url-gen";
import UploadWidget from '../components/MicroComponents/UploadWidget';
import "bootstrap/dist/css/bootstrap.min.css";
export default function NewItem() {
  const [inventorys, setInventorys] = useState([])
  const [foundInventory, setFoundInventory] = useState(null)
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
  const handleChange = (evt) => {
    setInventory({ ...inventory, [evt.target.name]: evt.target.value })
  }

const columns = ['name', 'strain', 'productCategory', 'inventoryName', 'itemDetail', 'unitMeasure', 'unitOnHand', 'targetQuantity', 'unitCost', 'plantOriginDate', 'plantOrigin','plantStage' ]

  // index
  const getInventorys = async () => {
    try {
      const response = await fetch('/api/inventorys')
      const data = await response.json()
      setInventorys(data)
    } catch (error) {
      console.error(error)
    }
  }
  // delete
  const deleteInventory = async (id) => {
    try {
      const response = await fetch(`/api/inventorys/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      setFoundInventory(data)
    } catch (error) {
      console.error(error)
    }
  }
  // update
  const updateInventory = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/inventorys/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...updatedData })
      })
      const data = await response.json()
      const inventorysCopy = [...inventorys]
      const index = inventorysCopy.findIndex(inventory => id === inventory._id)
      inventorysCopy[index] = { ...inventorysCopy[index], ...updatedData }
      setInventorys(inventorysCopy)
    } catch (error) {
      console.error(error)
    }
    //   const data = await response.json()
    //   setFoundInventory(data)
    // } catch (error) {
    //   console.error(error)
    // }

  }
  // create
  const createInventory = async () => {
    try {
      const response = await fetch(`/api/inventorys`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...inventory })
      })
      const data = await response.json()
      setFoundInventory(data)
      setInventory({
        name: '',
        strain: '',
        productCategory: '',
        inventoryName: '',
        itemDetail: '',
        unitMeasure: '',
        unitOnHand: 0,
        unitCost: 10.99,
        targetQuantity: 0,
        newPlant: false,
        plantOrigin: '',
        plantOriginDate: '',
        plantStage: ''
      })
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getInventorys()
  }, [foundInventory])

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
      unitOnHand: 0,
      unitCost: 10.99,
      targetQuantity: 0,
      newPlant: false,
      plantOrigin: '',
      plantOriginDate: '',
      plantStage: '',
      image: result?.info?.secure_url
    })
  }
  return (
    <>
      {
        inventorys && inventorys.length ? (<>
          {
            inventorys.map((inventory, row) => {
              return (
                <table key = {inventory._id}>
                  {/* <tr>
                    <th>
                      <td> {inventory.name}</td>
                    </th>
                  </tr>

                  <tr>
                    <th>
                      <td> {inventory.strain}</td>
                    </th>
                  </tr>

                  <tr>
                    <th>
                      <td> {inventory.targetQuantity}</td>
                    </th>
                  </tr> */}


                  <td>{inventory.name}</td>
                  <td>{inventory.strain}</td>
                  <td>{inventory.productCategory}</td>
                  <td>{inventory.inventoryName}</td>
                  <td>{inventory.itemDetail}</td>
                  <td>{inventory.unitMeasure}</td>
                  <td>{inventory.unitOnHand}</td>
                  <td>{inventory.unitCost}</td>
                  <td>{inventory.targetQuantity}</td>
                  <td>{inventory.newPlant}</td>
                  <td>{inventory.plantOrigin}</td>
                  <td>{inventory.plantStage}</td>
                  <td>{inventory.plantOriginDate}</td>


                  
                  {inventory.name} is {inventory.strain} {inventory.newPlant ? 'one of our plants' : 'its processed with love'}
                  <br />
                  {/* <button onClick={() => deleteInventory(inventory._id)}>Delete Inventory </button>
                  <button onClick={() => updateInventory(inventory._id)}>EditInventory </button> */}
                </table>
              )
            })
          }
        </>) : <h1>No inventory items Yet Add One Below</h1>
      }




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
      {'New Item Name'}<input value={inventory.name} onChange={handleChange} name="name"></input><br />
      {'Strain '}<select
        value={inventory.strain}
        onChange={handleChange}
        name="strain">
        <option value="Select">Select One ...</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Sativa">Sativa</option>
        <option value="Indica">Indica</option>
        <option value="Not Specified">Not Specified</option>
      </select><br />
      {'Product Category '}<select
        value={inventory.productCategory}
        onChange={handleChange}
        name="productCategory">
        <option value="Select">Select One ...</option>
        <option value="Supplies-Plant Growth">Supplies-Plant Growth</option>
        <option value="Product Formulation Supplies">Product Formulation Supplies</option>
        <option value="Products Available for Sale">Products Available for Sale</option>
      </select><br />
      {'Inventory Name '}<select
        value={inventory.inventoryName}
        onChange={handleChange}
        name="inventoryName">
        <option value="Select">Select One ...</option>
        <option value="Seeds">Seeds</option>
        <option value="Loam">Loam</option>
        <option value="Fertilizer">Fertilizer</option>
        <option value="Plants">Plants</option>
        <option value="Humidity Packs">Humidity Packs</option>
        <option value="Processing Flower">Processing Flower</option>
        <option value="Oil/RSO">Oil/RSO</option>
        <option value="Custom In-House Oils">Custom In-House Oils</option>
        <option value="Flavor Enhancer">Flavor Enhancer</option>
        <option value="Oil">Oil</option>
        <option value="Herbs">Herbs</option>
        <option value="Raw Ingredients">Raw Ingredients</option>
        <option value="Calm">Calm</option>
        <option value="Packaging Products">Packaging Products</option>
        <option value="Misc Purchases">Misc Purchases</option>
        <option value="Raw Flower">Raw Flower</option>
        <option value="Gummies">Gummies</option>
        <option value="Candies">Candies</option>
        <option value="Tinctures-Base Oil">Tinctures-Base Oil</option>
        <option value="Topicals">Topicals</option>
        <option value="Marshmallows">Marshmallows</option>
      </select><br />
      {'Inventory Item Detail'}<input value={inventory.itemDetail} onChange={handleChange} name="itemDetail"></input><br />
      {'Unit Measure '}
      <select
        value={inventory.unitMeasure}
        onChange={handleChange}
        name="unitMeasure">
        <option value="Select">Select</option>
        <option value="oz.">oz.</option>
        <option value="gal">gal</option>
        <option value="lb">lb</option>
        <option value="cubicYard">cubic yard</option>
        <option value="cubicFoot">cubic foot</option>
        <option value="each">each</option>
        <option value="other">other</option>
      </select><br />
      {'Units on Hand '}<input value={inventory.unitOnHand} type='number' onChange={handleChange} name="unitOnHand"></input><br />
      {'Unit Cost '}<input type="number" value={inventory.unitCost} onChange={handleChange} name="unitCost"></input><br />
      {'Target Quantity '}<input value={inventory.targetQuantity} type='number' onChange={handleChange} name="targetQuantity"></input><br />
      {'New Plant '}<input type='checkbox' checked={inventory.newPlant}
        onChange={(evt) => setInventory({ ...inventory, newPlant: evt.target.checked })}
        name="newPlant"></input><br />
      {'Plant Origin '}      <select
        value={inventory.plantOrigin}
        onChange={handleChange}
        name="plantOrigin">
        <option value="Select">Select</option>
        <option value="Seed">Seed</option>
        <option value="Clone">Clone</option>
        <option value="Mature Plant">Mature Plant</option>
      </select><br />
      {'Plant Origin Date '}<input type='date' value={inventory.plantOriginDate} onChange={handleChange} name="plantOriginDate"></input><br />
      {'Plant Stage '}<select
        value={inventory.plantStage}
        onChange={handleChange}
        name="plantStage">
        <option value="Select">Select One ...</option>
        <option value="Seedling">Seedling</option>
        <option value="Vegetative">Vegetative</option>
        <option value="Flowering">Flowering</option>
        <option value="Harvest">Harvest</option>
      </select><br />
      {'ID Image '}<input value={url} onChange={handleChange} name="url"></input><br />

      <button onClick={() => createInventory()}>Create A New NewInventory</button>
      {
        foundInventory ? <div>
          <h2>{foundInventory.name}</h2>
          <h2>{foundInventory.strain}</h2>
          <h2>{foundInventory.productCategory}</h2>
          <h2>{foundInventory.inventoryName}</h2>
          <h2>{foundInventory.itemDetail}</h2>
          <h2>{foundInventory.unitMeasure}</h2>
          <h2>{foundInventory.unitOnHand}</h2>
          <h2>{foundInventory.unitCost}</h2>
          <h2>{foundInventory.targetQuantity}</h2>
          <h2>{foundInventory.newPlant}</h2>
          <h2>{foundInventory.plantOrigin}</h2>
          <h2>{`${foundInventory.plantOriginDate.toLocaleString().replace(/T.*/, '').split('/').join('.')}`}</h2>
          <h2>{foundInventory.plantStage}</h2>

          <>
            {/* <Table striped bordered hover size="sm">
      <thead>
        <tr>
        <th>name</th>
          <th>strain</th>
          <th>productCategory</th>
          <th>inventoryName</th>
          <th>itemDetail</th>
          <th>unitMeasure</th>
          <th>unitOnHand</th>
          <th>unitCost</th>
          <th>targetQuantity</th>
          <th>plantOrigin</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{inventorys.name}</td>
          <td>{inventorys.strain}</td>
          <td>{inventorys.productCategory}</td>
          <td>{inventorys.inventoryName}</td>
          <td>{inventorys.itemDetail}</td>
          <td>{inventorys.unitMeasure}</td>
          <td>{inventorys.unitOnHand}</td>
          <td>{inventorys.unitCost}</td>
          <td>{inventorys.targetQuantity}</td>
          <td>{inventorys.plantOrigin}</td>
        </tr>
        
      </tbody>
    </Table> */}

          </>


        </div> : <>  </>
      }




    </>
  )
}

