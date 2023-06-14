import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NewAccount from '../../pages/NewAccount'
import Revenue from '../../pages/Revenue'
import Expenses from '../../pages/Expenses'
import NewPatient from '../../pages/NewPatient';
import NewItem from '../../pages/NewItem'
import Table from '../../pages/Table'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Inventory from '../../pages/Inventory'

import makeData from '../../makeData';
import Bar from '../../components/Bar/Bar';
import NewOrderPage from '../../pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../../pages/OrderHistoryPage/OrderHistoryPage';

// import InventoryItem from './pages/NewItem';
function App() {

  
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
            <Route path="/rando" element={<Inventory />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes> 
        </BrowserRouter>
        </>
        </div>
        </div>
  );
}

export default App;
