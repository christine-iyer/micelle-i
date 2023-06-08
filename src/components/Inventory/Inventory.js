import { useRef, useState } from 'react'

export default function Inventory ({
  inventory,
  updateInventory,
  deleteInventory
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)
  return (
    <>
      <card>
        <h4 onClick={() => setShowInput(!showInput)}>{inventory.name}</h4>
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const name = inputRef.current.value
              updateInventory(inventory._id, { ...inventory })
              setShowInput(false)
            }
          }}
          defaultValue={inventory.name}
        />
        <a href={inventory.itemDetail} target='_blank' rel='noreferrer'> {inventory.itemDetail}</a>
        <button
          onClick={() => deleteInventory(inventory._id)}
        >
          Delete Me
        </button>

        <button
          onClick={() => updateInventory(inventory._id)}
        >
          Update Me
        </button>
      </card>
    </>
  )
}
