import React from 'react';
import { Link } from 'react-router-dom';


const Home = () =>{
  return (
      <div className="Home">
        <h3>Seja bem vindo aos Hungry-hub</h3>
        <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <p>Cadastro de Cliente</p>
            <li>
                <Link to="/cadastro">Cadastro</Link>
            </li>
            <p>Cadastro de Entregador</p>
            <li>
                <Link to="/cadastroentregador">Cadastro</Link>
            </li>
            <p>Cadastro de Restaurante</p>
            <li>
                <Link to="/cadastrorestaurante">Cadastro</Link>
            </li>
        </ul>
      </div>
  );
}

export default Home;
