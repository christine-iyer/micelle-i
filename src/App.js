import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import styled from 'styled-components'
// import { useTable, usePagination } from 'react-table'
import './App.css';
import NewAccount from './pages/NewAccount'
import Revenue from './pages/Revenue'
import Expenses from './pages/Expenses'
import NewItem from './pages/NewItem'
import NewPatient from './pages/NewPatient';
import Table from './pages/Table'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import makeData from './makeData';
import Bar from './components/Bar';
import { Inventory } from '@mui/icons-material';
import InventoryItem from './pages/NewItem';
function App() {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'Category',
            accessor: 'firstName',
          },
          {
            Header: 'Item',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Unit Measure',
            accessor: 'age',
          },
          {
            Header: 'Strain',
            accessor: 'visits',
          },
          {
            Header: 'Type',
            accessor: 'status',
          },
          {
            Header: 'Units on Hand',
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
      <div className="App-header">

      <>
        <BrowserRouter>
          <Bar />
          <Routes>
            <Route path="/" element={<Table />}/>
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/revenues" element={<Revenue />} />
            
            <Route path="/inventorys" element={<NewItem />} />
           
            <Route path="/newaccts" element={<NewAccount />} />
            <Route path="/newpts" element={<NewPatient />} />
          </Routes>
        </BrowserRouter>
        </>
        </div>
        </div>
  );
}

export default App;
