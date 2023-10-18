import React from 'react';
import { Link } from 'react-router-dom';

const Parte3Form = ({ data, onParte3Change }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onParte3Change({ [name]: value });
    };

    return (
        <div>
            <h2>Cadastro de Entregador Parte 3</h2>

            <input type="text" name="cep" value={data.cep} onChange={handleInputChange} placeholder="CEP" />

            <input type="text" name="cidade" value={data.cidade} onChange={handleInputChange} placeholder="Cidade" />

            <input type="text" name="bairro" value={data.bairro} onChange={handleInputChange} placeholder="Bairro" />

            <input type="text" name="rua" value={data.rua} onChange={handleInputChange} placeholder="Rua" />

            <input type="text" name="numero_casa" value={data.numero_casa} onChange={handleInputChange} placeholder="Numero da Casa" />

        </div>
    )
}

export default Parte2Form;