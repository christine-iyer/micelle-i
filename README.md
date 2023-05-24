# Getting Started with Create React App

npm install react-table --save

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

```js
import Input from 'react-phone-number-input/input'

<Input
  country="US"
  value={value}
  onChange={setValue}/>

  // or

  import Input from 'react-phone-number-input/input'

<Input
  value={value}
  onChange={setValue}/>
```

### Text Input
```js
 <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>Pay to the Order of</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Account Name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Form.Group>
```

### Select Input
```js
 <Form.Group as={Col} md="6" controlId="validationUnitMeasure">
          <Form.Label>Unit Measure</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>oz.</option>
            <option>gal.</option>
            <option value="1">lb.</option>
            <option>cubic yard</option>
            <option>cubic foot</option>
            <option value="1">per each</option>
            <option value="1">Other...Please add in Description</option>
          </Form.Select>
        </Form.Group>
```

### Numeric Input
```js
<Form.Group as={Col} md="6" controlId="validationQuantity">
          <Form.Label>Quantity</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="1"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a valid quantity.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
```

### Select Checkbox

```js
<Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
</Form.Group>
```

### `npm start`

Runs the app in the development mode.\
Open [Candbox](https://codesandbox.io/s/github/tannerlinsley/react-table/tree/v7/examples/editable-data?from-embed=&file=/src/App.js) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


```
import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'
import Table from './components/Table'

import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

// function Table({ columns, data }) {
//   // Use the state and functions returned from useTable to build your UI
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({
//     columns,
//     data,
//   })

//   // Render the UI for your table
//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(column => (
//               <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row, i) => {
//           prepareRow(row)
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map(cell => {
//                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//               })}
//             </tr>
//           )
//         })}
//       </tbody>
//     </table>
//   )
// }

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(20), [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default App
```