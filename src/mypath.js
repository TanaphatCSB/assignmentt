import React, { useState } from 'react';
import "./App.css";
import Result from './Result'; // นำเข้าคอมโพเนนต์ Result
import Register from './Register'; // นำเข้าคอมโพเนนต์ Register
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import App from './App';

function mypath() {

  
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/Result' element={<Result />} />
            <Route path='/Register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default mypath