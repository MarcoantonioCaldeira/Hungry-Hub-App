import React from 'react';
import { Link } from 'react-router-dom';

const Parte2Form = ({ data, onParte2Change }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onParte2Change({ [name]: value });
    };

    return (
        <div>
            <h2>Cadastro de restaurante Parte 2</h2>

            <input type="text" name="cep" value={data.cep} onChange={handleInputChange} placeholder="CEP" />

            <input type="text" name="uf" value={data.uf} onChangse={handleInputChange} placeholder="UF" />

            <input type="text" name="cidade" value={data.cidade} onChange={handleInputChange} placeholder="Cidade" />

            <input type="text" name="bairro" value={data.bairro} onChange={handleInputChange} placeholder="Bairro" />

            <input type="text" name="numero_end" value={data.numero_end} onChange={handleInputChange} placeholder="Numero" />

            <input type="text" name="rua" value={data.rua} onChange={handleInputChange} placeholder="Rua" />

            <input type="text" name="complemento" value={data.complemento} onChange={handleInputChange} placeholder="Complemento" />


        </div>
    )
}

export default Parte2Form;