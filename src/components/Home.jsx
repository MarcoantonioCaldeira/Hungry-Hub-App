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
            <li>
                <Link to="/cadastro">Cadastro</Link>
            </li>
        </ul>
      </div>
  );
}

export default Home;
