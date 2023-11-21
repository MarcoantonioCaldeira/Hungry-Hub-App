import React from 'react';
import './style/estilo_home.scss';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import { ButtonStyledMenuTwo, ButtonStyledMenu } from '../design-system/buttons.style';


const Home = () =>{
  return (
    <>
      <div className="Home">
        <ButtonStyledMenu className='btn-register'><Link to="/cadastro">Faça o seu pedido</Link></ButtonStyledMenu>     
        <ButtonStyledMenuTwo className='btn-login'><Link to="/login">Inicio</Link></ButtonStyledMenuTwo>
        <ButtonStyledMenuTwo className='btn-login'><Link to="/login">Sobre</Link></ButtonStyledMenuTwo>
        <ButtonStyledMenuTwo className='btn-login'><Link to="/login">Restaurantes</Link></ButtonStyledMenuTwo>
        <ButtonStyledMenuTwo className='btn-login'><Link to="/login">Nossas Carreiras</Link></ButtonStyledMenuTwo>
        <ButtonStyledMenuTwo className='btn-login'><Link to="/login">Login</Link></ButtonStyledMenuTwo>
      </div>

      <div className="Template">

      </div>
      
      <div className='Area-Registrations'>

        <p>Cadastro de Entregador</p>
        <li>
          <Link to="/cadastroentregador">Cadastro</Link>
        </li>

        <p>Cadastro de Restaurante</p>
        <li>
          <Link to="/cadastrorestaurante">Cadastro</Link>
        </li>

      </div>
      <Footer />
    </>
    
  );
}

export default Home;
