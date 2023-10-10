import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from './components/Login'
import Cadastro from './components/Cadastro';
import Home from './components/Home';

const RoutesComponent  = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    )
}


const RoutesContainer = () => {
    return (
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    );
  }

export default RoutesContainer;