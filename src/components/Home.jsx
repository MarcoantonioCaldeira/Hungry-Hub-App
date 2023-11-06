import React from 'react';
import './style/estilo_home.scss';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import { ButtonLogin, ButtonRegister } from '../design-system/buttons.style';


const Home = () =>{
  return (
    <>
      <div className="Home">
        <h3>Seja bem vindo aos Hungry-hub</h3>
            <ButtonLogin type='button'><Link to="/login">Login</Link></ButtonLogin>
            
            <ButtonRegister type='button'><Link to="/cadastro">Faça o seu pedido</Link></ButtonRegister>
            <p>Cadastro de Entregador</p>
            <li>
                <Link to="/cadastroentregador">Cadastro</Link>
            </li>
            <p>Cadastro de Restaurante</p>
            <li>
                <Link to="/cadastrorestaurante">Cadastro</Link>
            </li>
        
      </div>
      
      <div className='Corpo'>

      </div>
      <Footer />
    </>
    
  );
}

export default Home;
