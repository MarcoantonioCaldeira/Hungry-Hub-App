import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Parte1Form = ({ data, onParte1Change }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onParte1Change({ ...data, [name]: value });
    };

    return (
        <div>
            <h2>"Cadastro de restaurante Parte1"</h2>

            <input type="text" name="nome_proprietario" value={data.nome_proprietario} onChange={handleInputChange} placeholder="Nome do Proprietário" />

            <input type="text" name="email" value={data.email} onChange={handleInputChange} placeholder="Email" />

            <input type="text" name="telefone" value={data.telefone} onChange={handleInputChange} placeholder="Telefone" />

            <Link to="/">retornar a página inicial</Link>

        </div>
    )
}

export default Parte1Form;