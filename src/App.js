import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewAccount from './pages/NewAccount'
import Revenue from './pages/Revenue'
import Expenses from './pages/Expenses'
import NewPatient from './pages/NewPatient';
import NewItem from './pages/NewItem'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Inventory from './pages/Inventory'
import Bar from './components/Bar/Bar';
import ImageGallery from './pages/ImageGallery'


function App() {


  return (
    <div className="App">
      <div className="App-header">
<>
        <BrowserRouter>
          <Bar />
          <Routes>
            <Route path="/" element={<ImageGallery />}/>
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/revenues" element={<Revenue />} />
            <Route path="/inventorys" element={<NewItem />} />
           <Route path="/newaccts" element={<NewAccount />} />
            <Route path="/newpts" element={<NewPatient />} />
            <Route path="/rando" element={<Inventory />} />
              </Routes> 
        </BrowserRouter>
        </>
        </div>
        </div>
  );
}

export default App;
