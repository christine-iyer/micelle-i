import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import styled from 'styled-components'
// import { useTable, usePagination } from 'react-table'
import './App.css';
import Revenue from './pages/Revenue'
import Expenses from './pages/Expenses'
import NewPlantInventoryItem from './pages/NewPlantInventoryItem'
import NewNonPlantInventoryItem from './pages/NewNonPlantInventoryItem'
import Table from './pages/Table'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import makeData from './makeData';
import Bar from './components/Bar';
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
      <div className="App-header">

      <>
        <BrowserRouter>
          <Bar />
          <Routes>
            <Route path="/" element={<Table />}/>
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/newplant" element={<NewPlantInventoryItem />} />
            <Route path="/newnon" element={<NewNonPlantInventoryItem />} />
          </Routes>
        </BrowserRouter>
        </>
        </div>
        </div>
  );
}

export default App;
