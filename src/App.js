import logo from './logo.svg';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import { useTable, usePagination } from 'react-table'
import './App.css';
import Revenue from './components/Revenue'
import Expenses from './components/Expenses'
import NewPlantInventoryItem from './components/NewPlantInventoryItem'
import NewNonPlantInventoryItem from './components/NewNonPlantInventoryItem'
import Table from './components/Table'
import makeData from './makeData';
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
    <div className="App">
      <header className="App-header">
        <>
        <Revenue />
        <br></br>
        <Expenses />
        <br></br>
        <NewPlantInventoryItem />
        <br></br>
        <NewNonPlantInventoryItem />
        </>
        <br></br>
       <Table columns={columns} data={data}/>
      </header>
    </div>
  );
}

export default App;
