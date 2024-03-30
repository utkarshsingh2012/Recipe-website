import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Restuarant from "./component/basics/Restuarant"
import Detailed from './component/basics/detailedRecipe';
const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Restuarant />} />
          <Route path='/recipe/:id' element={<Detailed/>} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
};


export default App
