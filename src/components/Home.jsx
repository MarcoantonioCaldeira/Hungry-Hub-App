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

import {Font, FontRestaurante, FontEntregador} from '../design-system/Fonts'

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

        <div className='Area-Sub-Registrations'>

            <RegisterAreaRestaurant className='CadastroRestaurante'>
              <FontRestaurante>Restaurante</FontRestaurante>
              <li>
                <Link to="/cadastrorestaurante">Saiba mais</Link>
              </li>
            </RegisterAreaRestaurant>

            <RegisterAreaDeliveryMan  className='CadastroEntregador'>
              <FontEntregador>Entregador</FontEntregador>
              <li>
                <Link to="/cadastroentregador">Saiba mais</Link>
              </li>
            </RegisterAreaDeliveryMan>
        </div>

      
      </RegisterArea>
      <Footer />
    </>
    
  );
}

export default Home;
