import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from './components/Login';
import CadastroCliente from './components/CadastroCliente/CadastroCliente';
import CadastroRestaurante from './components/CadastroRestaurante/CadastroRestaurante';
import CadastroEntregador from './components/CadastroEntregador/CadastroEntregador';
import Home from './components/Home';

const RoutesComponent  = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroCliente />} />
            <Route path="/cadastroentregador" element={<CadastroEntregador />} />
            <Route path="/cadastrorestaurante" element={<CadastroRestaurante />} />
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