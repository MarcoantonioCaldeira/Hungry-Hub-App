import React from 'react';

const Parte1Form = ({ data, onParte1Change }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onParte1Change({ [name]: value });
    };

    return (
        <div>
            <h2>"Cadastro de restaurante Parte1"</h2>

            <input type="text" name="nome" value={data.nome} onChange={handleInputChange} placeholder="Nome" />

            <input type="text" name="nome" value={data.sobrenome} onChange={handleInputChange} placeholder="Sobrenome" />

            <input type="text" name="nome" value={data.email} onChange={handleInputChange} placeholder="Email" />

            <input type="text" name="nome" value={data.telefone} onChange={handleInputChange} placeholder="Celular" />

        </div>
    )
}

export default Parte1Form;