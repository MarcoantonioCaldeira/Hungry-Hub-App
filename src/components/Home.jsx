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

//img
import ImageTamplate from '../assets/img/image-painel.jpg'
import ImageDelivery from '../assets/img/img_entregador.jpg'
import ImageRestaurant from '../assets/img/img_restaurante.jpg'


const Home = () =>{
  return (
    <>
      <Menu className="Home">

        <div className='Um'>
          <ButtonStyledMenuTwo className='btn-login'><Link to="/login">Login</Link></ButtonStyledMenuTwo>
          <ButtonStyledMenu className='btn-register'><Link to="/cadastro">Faça o seu pedido</Link></ButtonStyledMenu>   
        </div>
   

        <div>
          <ButtonStyledMenuTwo className='btn-menu'><Link to="/login">Inicio</Link></ButtonStyledMenuTwo>
          <ButtonStyledMenuTwo className='btn-menu'><Link to="/login">Sobre</Link></ButtonStyledMenuTwo>
          <ButtonStyledMenuTwo className='btn-menu'><Link to="/login">Restaurantes</Link></ButtonStyledMenuTwo>
          <ButtonStyledMenuTwo className='btn-menu'><Link to="/login">Nossas Carreiras</Link></ButtonStyledMenuTwo> 
        </div>
      </Menu>

      <Template className="Template">
        <img src={ImageTamplate} className='ImageTemplate'/>
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
              <img src={ImageDelivery} className='ImageDelivery'/>
              <div>
                <FontRestaurante className='font_restaurante'>Restaurante</FontRestaurante>
                <li>
                  <Link to="/cadastrorestaurante">Saiba mais</Link>
                </li>
              </div>
            </RegisterAreaRestaurant>

            <RegisterAreaDeliveryMan  className='CadastroEntregador'>
              <img src={ImageRestaurant} className='ImageRestaurant'/>
              <div>
                <FontEntregador className='font_entregadores'>Entregadores</FontEntregador>
                <li>
                  <Link to="/cadastroentregador">Saiba mais</Link>
                </li>
              </div>
            </RegisterAreaDeliveryMan>
        </div>

      
      </RegisterArea>
      <Footer />
    </>
    
  );
}

export default Home;
