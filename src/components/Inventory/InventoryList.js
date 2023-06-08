import Inventory from '../Inventory/Inventory'

export default function InventoryList({
  inventorys,
  updateInventory,
  deleteInventory
}) {
  return (
    <>
      {inventorys.length
        ? inventorys.map(inventory => (
    //       <table striped bordered hover size="sm">
    //   <thead>
        
    //     {/* <th>name</th>
    //       <th>strain</th>
    //       <th>productCategory</th>
    //       <th>inventoryName</th>
    //       <th>itemDetail</th>
    //       <th>unitMeasure</th>
    //       <th>unitOnHand</th>
    //       <th>unitCost</th>
    //       <th>targetQuantity</th>
    //       <th>plantOrigin</th> */}
       
    //   </thead>
    //   <tbody key={inventory._id}>
    //     <tr>
    //     <td>{inventory.name}</td>
    //       <td>{inventory.strain}</td>
    //       <td>{inventory.productCategory}</td>
    //       <td>{inventory.inventoryName}</td>
    //       <td>{inventory.itemDetail}</td>
    //       <td>{inventory.unitMeasure}</td>
    //       <td>{inventory.unitOnHand}</td>
    //       <td>{inventory.unitCost}</td>
    //       <td>{inventory.targetQuantity}</td>
    //       <td>{inventory.plantOrigin}</td>
    //     </tr>
        
    //   </tbody>
    // </table>


        <Inventory
            key={inventory._id}
            inventory={inventory}
            updateInventory={updateInventory}
            deleteInventory={deleteInventory}
          />
        ))
        : <>
          <h2>No Inventorys Yet... Add one in the Form Above</h2>
        </>
      }
    </>
  )
}

