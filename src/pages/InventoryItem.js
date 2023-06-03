import { useState, useEffect } from 'react'
import { Cloudinary } from "@cloudinary/url-gen";
import UploadWidget from '../components/MicroComponents/UploadWidget';

export default function NewItem() {
  const [newitems, setNewitems] = useState([])
  const [foundNewitem, setFoundNewitem] = useState(null)
  const [newitem, setNewitem] = useState({
    name: '',
    strain: '',
    description: '',
    productCategory: '',
    inventoryName: '',
    itemDetail: '',
    unitMeasure: '',
    unitOnHand: '', 
    unitCost: '',
    targetQuantity: '',
    newPlant: '',
    plantOrigin: '',
    plantOriginDate: '',
    plantStage: '', 
    itemId: '', 
    image: ''
  })
  const handleChange = (evt) => {
    setNewitem({ ...newitem, [evt.target.name]: evt.target.value })
  }

  // index
  const getNewitems = async () => {
    try {
      const response = await fetch('/api/newitems')
      const data = await response.json()
      setNewitems(data)
    } catch (error) {
      console.error(error)
    }
  }
  // delete
  const deleteNewitem = async (id) => {
    try {
      const response = await fetch(`/api/newitems/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      setFoundNewitem(data)
    } catch (error) {
      console.error(error)
    }
  }
  // update
  const updateNewitem = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/newitems/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...updatedData })
      })
      const data = await response.json()
      setFoundNewitem(data)
    } catch (error) {
      console.error(error)
    }
  }
  // create
  const createNewitem = async () => {
    try {
      const response = await fetch(`/api/newitems`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newitem })
      })
      const data = await response.json()
      setFoundNewitem(data)
      setNewitem({
        name: '',
        strain: '',
        description: '',
        productCategory: '',
        inventoryName: '',
        itemDetail: '',
        unitMeasure: '',
        unitOnHand: '', 
        unitCost: '',
        targetQuantity: '',
        newPlant: '',
        plantOrigin: '',
        plantOriginDate: '',
        plantStage: '', 
        itemId: '', 
        image: ''

      })
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    getNewitems()
  }, [foundNewitem])


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
    setNewitem({
      name: '',
      strain: '',
      description: '',
      productCategory: '',
      inventoryName: '',
      itemDetail: '',
      unitMeasure: '',
      unitOnHand: '', 
      unitCost: '',
      targetQuantity: '',
      newPlant: '',
      plantOrigin: '',
      plantOriginDate: '',
      plantStage: '', 
      itemId: '', 
      image: '',
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
          <img variant="top"  src={url} id="uploadedimage"  ></img>
          <p className="url">{url}</p>
        </div>
      )}


      {'New Item Name'}<input value={newitem.name} onChange={handleChange} name="name"></input><br />
      {'Strain '}<select
        value={newitem.strain}
        onChange={handleChange}
        name="strain">
          <option value="Select">Select One ...</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Sativa">Sativa</option>
        <option value="Indica">Indica</option>
        <option value="Not Specified">Not Specified</option>
      </select><br />

      {'Product Category '}<select
        value={newitem.productCategory}
        onChange={handleChange}
        name="productCategory">
          <option value="Select">Select One ...</option>
        <option value="Supplies-Plant Growth">Supplies-Plant Growth</option>
        <option value="Product Formulation Supplies">Product Formulation Supplies</option>
        <option value="Products Available for Sale">Products Available for Sale</option>
      </select><br />

      {'Inventory Name '}<select
        value={newitem.inventoryName}
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
      {'Unit Measure '}
      <select
        value={newitem.unitMeasure}
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



      {'Units on Hand '}<input value={newitem.unitOnHand} type='number' onChange={handleChange} name="unitOnHand"></input><br />
      {'Unit Cost '}<input value={newitem.unitCost} onChange={handleChange} name="unitCost"></input><br />
      {'Target Quantity '}<input value={newitem.targetQuantity} type='number' onChange={handleChange} name="targetQuantity"></input><br />
      {'New Plant '}<input value={newitem.newPlant} onChange={handleChange} name="newPlant"></input><br />
      {'Plant Origin '}      <select
        value={newitem.plantOrigin}
        onChange={handleChange}
        name="plantOrigin">
          <option value="Select">Select</option>
        <option value="Seed">Seed</option>
        <option value="Clone">Clone</option>
        <option value="Mature Plant">Mature Plant</option>
        
        
      </select><br />



      {'Plant Origin Date '}<input value={newitem.plantOriginDate} onChange={handleChange} name="plantOriginDate"></input><br />
      {'Plant Stage '}<select
        value={newitem.plantStage}
        onChange={handleChange}
        name="plantStage">
          <option value="Select">Select One ...</option>
        <option value="Seedling">Seedling</option>
        <option value="Vegetative">Vegetative</option>
        <option value="Flowering">Flowering</option>
        <option value="Harvest">Harvest</option>
      </select><br />
      {'ID Image '}<input value={url} onChange={handleChange} name="url"></input><br />
      

<button onClick={() => createNewitem()}>Create A New Newitem</button>
      {
        foundNewitem ? <div>
          <h2>{foundNewitem.name}</h2>
          <h2>{foundNewitem.strain}</h2>
          <h2>{foundNewitem.productCategory}</h2>
          <h2>{foundNewitem.inventoryName}</h2>
          <h2>{foundNewitem.itemDetail}</h2>
          <h2>{foundNewitem.unitMeasure}</h2>
          <h2>{foundNewitem.unitMeasure}</h2>
          <h2>{foundNewitem.unitOnHand}</h2>
          <h2>{foundNewitem.unitCost}</h2>
          <h2>{foundNewitem.targetQuantity}</h2>
          <h2>{foundNewitem.newPlant}</h2>
          <h2>{foundNewitem.plantOrigin}</h2>
          <h2>{foundNewitem.plantOriginDate}</h2>
          <h2>{foundNewitem.plantStage}</h2>
          <h2>{foundNewitem.image}</h2>

        </div> : <>No New Accounts Found </>
      }



    </>
  )
}

