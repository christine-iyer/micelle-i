import { useState, useEffect } from 'react'

export default function NewItem() {
  const [inventorys, setInventorys] = useState([])
  const [foundNewInventory, setFoundNewInventory] = useState(null)
  const [inventory, setNewInventory] = useState({
    name: '',
    strain: '',
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
    plantStage: ''
  })
  const handleChange = (evt) => {
    setNewInventory({ ...inventory, [evt.target.name]: evt.target.value })
  }

  // index
  const getNewInventorys = async () => {
    try {
      const response = await fetch('/api/inventorys')
      const data = await response.json()
      setInventorys(data)
    } catch (error) {
      console.error(error)
    }
  }
  // delete
  const deleteNewInventory = async (id) => {
    try {
      const response = await fetch(`/api/inventorys/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      setFoundNewInventory(data)
    } catch (error) {
      console.error(error)
    }
  }
  // update
  const updateNewInventory = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/inventorys/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...updatedData })
      })
      const data = await response.json()
      setFoundNewInventory(data)
    } catch (error) {
      console.error(error)
    }
  }
  // create
  const createNewInventory = async () => {
    try {
      const response = await fetch(`/api/inventorys`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...inventory })
      })
      const data = await response.json()
      setFoundNewInventory(data)
      setNewInventory({
        name: '',
        strain: '',
  
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
        plantStage: ''

      })
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    getNewInventorys()
  }, [foundNewInventory])


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
    setNewInventory({
      name: '',
      strain: '',

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
      plantStage: ''

  })
}

  return (
    <>
    {/* <UploadWidget onUpload={handleOnUpload}>
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
      )} */}


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
      {'Unit Measure '}
      <select
        value={inventory.unitMeasure}
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



      {'Units on Hand '}<input value={inventory.unitOnHand} type='number' onChange={handleChange} name="unitOnHand"></input><br />
      {'Unit Cost '}<input value={inventory.unitCost} onChange={handleChange} name="unitCost"></input><br />
      {'Target Quantity '}<input value={inventory.targetQuantity} type='number' onChange={handleChange} name="targetQuantity"></input><br />
      {'New Plant '}<input value={inventory.newPlant} onChange={handleChange} name="newPlant"></input><br />
      {'Plant Origin '}      <select
        value={inventory.plantOrigin}
        onChange={handleChange}
        name="plantOrigin">
          <option value="Select">Select</option>
        <option value="Seed">Seed</option>
        <option value="Clone">Clone</option>
        <option value="Mature Plant">Mature Plant</option>
        
        
      </select><br />



      {'Plant Origin Date '}<input value={inventory.plantOriginDate} onChange={handleChange} name="plantOriginDate"></input><br />
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

      

<button onClick={() => createNewInventory()}>Create A New NewInventory</button>
      {
        foundNewInventory ? <div>
          <h2>{foundNewInventory.name}</h2>
          <h2>{foundNewInventory.strain}</h2>
          <h2>{foundNewInventory.productCategory}</h2>
          <h2>{foundNewInventory.inventoryName}</h2>
          <h2>{foundNewInventory.itemDetail}</h2>
          <h2>{foundNewInventory.unitMeasure}</h2>
          <h2>{foundNewInventory.unitMeasure}</h2>
          <h2>{foundNewInventory.unitOnHand}</h2>
          <h2>{foundNewInventory.unitCost}</h2>
          <h2>{foundNewInventory.targetQuantity}</h2>
          <h2>{foundNewInventory.newPlant}</h2>
          <h2>{foundNewInventory.plantOrigin}</h2>
          <h2>{foundNewInventory.plantOriginDate}</h2>
          <h2>{foundNewInventory.plantStage}</h2>
   

        </div> : <>No New Accounts Found </>
      }



    </>
  )
}

