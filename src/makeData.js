

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {

  return {
    name: "Chris",
    strain: "Crystal",
    productCategory: Math.floor(Math.random() * 30),
    inventoryName: Math.floor(Math.random() * 100),
    itemDetail: Math.floor(Math.random() * 100),
    unitMeasure: 'ml', 
    unitOnHand: 0, 
    unitCost: 30.99, 
    targetQuantity: 10, 
    plantOrigin: 'seed', 
    plantOriginDate: '', 
    plantStage: 'vegetative'

  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
