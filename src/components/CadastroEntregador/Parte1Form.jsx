import React from 'react';
import { Link } from 'react-router-dom';


const Parte1Form = ({ data, onParte1Change }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onParte1Change({ [name]: value });
    };

    return (
        <div>
            <h2>Cadastro de Entregador Parte 1</h2>

            <input type="text" name="nome" value={data.nome} onChange={handleInputChange} placeholder="Nome" />

            <input type="text" name="sobrenome" value={data.sobrenome} onChange={handleInputChange} placeholder="Sobrenome" />

            <input type="text" name="email" value={data.email}  onChange={handleInputChange} placeholder="Email" />

            <input type="text" name="cpf" value={data.cpf} onChange={handleInputChange} placeholder="CPF" />

            <Link to="/">retornar a página inicial</Link>

        </div>
    )
}

export default Parte1Form;