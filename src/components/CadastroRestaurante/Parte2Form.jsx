import React from 'react';
import { Link } from 'react-router-dom';

const Parte2Form = ({ data, onParte2Change }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onParte2Change({ [name]: value });
    };

    return (
        <div>
            <h2>Cadastro de Entregador Parte 2</h2>

            <input type="text" name="telefone" value={data.telefone} onChange={handleInputChange} placeholder="Telefone" />

            <input type="text" name="cnh" value={data.cnh} onChange={handleInputChange} placeholder="Numero da CNH" />

            <input type="text" name="Foto_Entregador" value={data.Foto_Entregador} onChange={handleInputChange} placeholder="Selecione uma Foto" />

        </div>
    )
}

export default Parte2Form;