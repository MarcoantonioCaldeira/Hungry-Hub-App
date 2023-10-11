import React from 'react';

const Parte1Form = ({ data, onParte1Change }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onParte1Change({ [name]: value });
    };

    return (
        <div>
            <h2>"Cadastro de restaurante Parte1"</h2>

            <input type="text" name="nome do proprietario" value={data.nome_proprietario} onChange={handleInputChange} placeholder="Nome do Proprietario" />

            <input type="text" name="email" value={data.email} onChange={handleInputChange} placeholder="Email" />

            <input type="text" name="telefone" value={data.telefone} onChange={handleInputChange} placeholder="Celular" />

        </div>
    )
}

export default Parte1Form;