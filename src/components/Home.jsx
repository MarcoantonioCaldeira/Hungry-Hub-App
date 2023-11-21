import React from 'react';
import './style/estilo_home.scss';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import { ButtonStyledMenuTwo, ButtonStyledMenu } from '../design-system/buttons.style';
import { Template, Menu, WeSolutions, Registration} from '../design-system/Components';


const Home = () =>{
  return (
    <>
      <Menu className="Home">
        <ButtonStyledMenu className='btn-register'><Link to="/cadastro">Faça o seu pedido</Link></ButtonStyledMenu>     
        <ButtonStyledMenuTwo className='btn-login'><Link to="/login">Inicio</Link></ButtonStyledMenuTwo>
        <ButtonStyledMenuTwo className='btn-login'><Link to="/login">Sobre</Link></ButtonStyledMenuTwo>
        <ButtonStyledMenuTwo className='btn-login'><Link to="/login">Restaurantes</Link></ButtonStyledMenuTwo>
        <ButtonStyledMenuTwo className='btn-login'><Link to="/login">Nossas Carreiras</Link></ButtonStyledMenuTwo>
        <ButtonStyledMenuTwo className='btn-login'><Link to="/login">Login</Link></ButtonStyledMenuTwo>
      </Menu>

      <Template className="Template">

      </Template>

      <WeSolutions className="Solutions">
        <h2>Nossas soluções</h2>
      </WeSolutions>
      
      <Registration className='Area-Registrations'>

        <p>Cadastro de Entregador</p>
        <li>
          <Link to="/cadastroentregador">Cadastro</Link>
        </li>

        <p>Cadastro de Restaurante</p>
        <li>
          <Link to="/cadastrorestaurante">Cadastro</Link>
        </li>

      </Registration>
      <Footer />
    </>
    
  );
}

export default Home;
