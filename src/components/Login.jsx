import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


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
        <div>
            <h1>Iniciar Sessão</h1>

            <form onSubmit={handleFormAuth}>
                <input type="text" name='email' placeholder='Seu Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" name='senha' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>

                <input type='submit' value="Login" />
            </form>

            <Link to="/">retornar a página inicial</Link>
        </div>
    )
}

export default Login;