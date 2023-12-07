import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer';
import './estiloLogin.scss';
import { useNavigate } from 'react-router-dom';
import { ButtonLogin } from '../../design-system/buttons.style';
import {FontLogin} from '../../design-system/Fonts';
import { InputLogin } from '../../design-system/Inputs';

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();


    const handleFormAuth = async (event) => {
        event.preventDefault();

        const DadosFormulario = {
            email: email,
            senha: senha
        }

        try{
            const URL_API = 'http://localhost:5050'
            const resposta = await axios.post(URL_API + '/auth/login', DadosFormulario)
            console.log(resposta)

            if(resposta.status === 200){

                setEmail('')
                setSenha('')
                navigate('/dashboard')
            }

        }catch(error){
            console.error('Ocorreu um erro')
        }
    }


    return(
        <>
            <div className='BodyLogin'>
                 {/* <img src={BackgroundLogin} className='BackgroundLogin'/>    */}
                <form onSubmit={handleFormAuth}>
                    
                    <div className='areaInputLogin'>
                        <FontLogin className='TitleLogin'>Iniciar Sessão</FontLogin>
                        <InputLogin className='InputLogin' placeholder='E-mail'  type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <InputLogin className='InputLogin' placeholder="Senha" type="text" name='senha' value={senha} onChange={(e) => setSenha(e.target.value)} />

                        <ButtonLogin className='btn_login'><a>Entrar</a></ButtonLogin>  
                    </div>
                                      
                    <Link to="/">retornar a página inicial</Link>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Login;

