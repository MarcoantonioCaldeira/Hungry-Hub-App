import React from 'react';
import './style/estilo_home.scss';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import { ButtonStyledMenuTwo, ButtonStyledMenu } from '../design-system/buttons.style';
import { 
        Template, 
        Menu, 
        WeSolutions, 
        RegisterArea, 
        RegisterAreaDeliveryMan,
        RegisterAreaRestaurant,
        SolutionRestaurant, 
        SolutionLanch
} from '../design-system/Components';

import {Font} from '../design-system/Fonts'

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
        <Font>Do que você precisa?</Font>
        
        <SolutionRestaurant className='Restaurante'>

        </SolutionRestaurant>

        <SolutionLanch className='Lanchonete'>

        </SolutionLanch>
        
      </WeSolutions>
      
      <RegisterArea className='Area-Registrations'>

        <Font>Quer ser o nosso parceiro?</Font>

        <RegisterAreaDeliveryMan  className='CadastroEntregador'>
          <p>Cadastro de Entregador</p>
          <li>
            <Link to="/cadastroentregador">Cadastro</Link>
          </li>
        </RegisterAreaDeliveryMan>
        
        <RegisterAreaRestaurant className='CadastroRestaurante'>
          <p>Cadastro de Restaurante</p>
          <li>
            <Link to="/cadastrorestaurante">Cadastro</Link>
          </li>
        </RegisterAreaRestaurant>
      
      </RegisterArea>
      <Footer />
    </>
    
  );
}

export default Home;
