export default function CreateInventory ({
     createInventory,
     inventory,
     handleChange
   }) {
     return (
       <>
         <h2>Create A Inventory</h2>
         <form onSubmit={(e) => {
           e.preventDefault()
           createInventory()
         }}
         >
           <input type='text' value={inventory.name} name='name' onChange={handleChange} placeholder='Name' />
           <input type='text' value={inventory.strain} name='strain' onChange={handleChange} placeholder='Strain' />
           <input type='text' value={inventory.productCategory} name='productCategory' onChange={handleChange} placeholder='Product Category' />
           <input type='text' value={inventory.inventoryName} name='inventoryName' onChange={handleChange} placeholder='Inventory Name' />
           <input type='text' value={inventory.itemDetail} name='itemDetail' onChange={handleChange} placeholder='Item Detail' />
           <input type='text' value={inventory.unitMeasure} name='unitMeasure' onChange={handleChange} placeholder='Unit Measure' />
           <input type='number' value={inventory.unitOnHand} name='unitOnHand' onChange={handleChange} placeholder='Units on Hand' />
           <input type='text' value={inventory.unitCost} name='unitCost' onChange={handleChange} placeholder='Unit Cost' />
           <input type='number' value={inventory.targetQuantity} name='targetQuantity' onChange={handleChange} placeholder='Target Quantity' />
           <input type='checkbox' value={inventory.newPlant} name='newPlant' onChange={handleChange} placeholder='New Plant?' />
           <input type='text' value={inventory.plantOrigin} name='plantOrigin' onChange={handleChange} placeholder='Plant Origin \' />
           <input type='date' value={inventory.plantOriginDate} name='plantOriginDate' onChange={handleChange} placeholder='Plant Origin Date' />
           <input type='text' value={inventory.plantStage} name='plantStage' onChange={handleChange} placeholder='Pland Stage' />
           <input type='text' value={inventory.image} name='image' onChange={handleChange} placeholder='URL' />
           <input type='submit' value='Create Inventory' />
         </form>
       </>
     )
   }