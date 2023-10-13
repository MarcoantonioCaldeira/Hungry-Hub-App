import React from 'react';
import { Link } from 'react-router-dom';

const Parte1Form = ({ data, onParte1Change }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onParte1Change({ ...data, [name]: value });
    };

    return (
        <div>
            <h2>Cadastro de restaurante Parte 1</h2>

            <input type="text" name="nome_proprietario" value={data.nome_proprietario} onChange={handleInputChange} placeholder="Nome do Proprietário" />

            <input type="text" name="email" value={data.email} onChange={handleInputChange} placeholder="Email" />

            <input type="text" name="telefone_Restaurante" value={data.telefone_Restaurante}  onChange={handleInputChange} placeholder="Telefone" />

            <input type="text" name="cnpj_cpf" value={data.cnpj_cpf} onChange={handleInputChange} placeholder="CPF ou CNPJ" />

            <input type="text" name="senha" value={data.senha} onChange={handleInputChange} placeholder="Senha" />

            <input type="text" name="confirmarSenha" value={data.confirmarSenha} onChange={handleInputChange} placeholder="Confirmar Senha" />

            <Link to="/">retornar a página inicial</Link>

        </div>
    )
}

export default Parte1Form;