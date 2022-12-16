import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Monthly from './pages/Monthly';
import Weekly from './pages/Weekly';

function routes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/weekly' element={<Weekly />}/>
      <Route path='/monthly' element={<Monthly />}/>
    </Routes>
  );
}

export default routes;