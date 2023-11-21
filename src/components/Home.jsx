import React from 'react';
import './style/estilo_home.scss';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import { ButtonStyledTwo, ButtonStyled } from '../design-system/buttons.style';


const Home = () =>{
  return (
    <>
      <div className="Home">
        <ButtonStyledTwo className='btn-login'><Link to="/login">Login</Link></ButtonStyledTwo>
            
        <ButtonStyled className='btn-register'><Link to="/cadastro">Faça o seu pedido</Link></ButtonStyled>     
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
