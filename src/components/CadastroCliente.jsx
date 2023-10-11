import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/estilo.scss';
import axios from 'axios';

axios.defaults.withCredentials = true;

const CadastroCliente = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState(null); // Estado para armazenar erros
    const [success, setSuccess] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        const DadosFormulario = {
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha,
            confirmarSenha: confirmarSenha,
        };
    
        try {

            setError(null);

            const resposta = await axios.post(
                'http://localhost:5050/rest/cliente/save', 
                DadosFormulario);

            if (resposta.status === 200) {
                // Define um estado de sucesso
                setSuccess(true);
        
                // Limpa os campos do formulário
                setNome('');
                setEmail('');
                setTelefone('');
                setSenha('');
                setConfirmarSenha('');
            }else {
                // Lida com respostas de erro da API, se necessário
            }
        }catch(error) {
            
            console.error('Ocorreu um erro ao cadastrar.');
        }
    }


    return(
        <div>
            <h1>Cadastro de clientes</h1>
            <form onSubmit={handleFormSubmit}>

                <input type='text' placeholder='Seu nome' value={nome} onChange={(e) => setNome(e.target.value)} />

                <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>

                <input type='text' placeholder='telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)}/>

                <input type='text' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>

                <input type='text' placeholder='Confirma Senha' value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/>

                <input type='submit' value="CADASTRAR" />
            </form>
            

            {success && <p>Cadastro realizado com sucesso!</p>}
            {error && <p>{error}</p>}
            
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}



export default CadastroCliente;

