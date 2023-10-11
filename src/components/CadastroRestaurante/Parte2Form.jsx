import React from 'react';

const Parte2Form = ({ data, onParte2Change }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onParte2Change({ [name]: value });
    };

    return (
        <div>
            <h2>"Cadastro de restaurante Parte1"</h2>

            <input type="text" name="cep" value={data.cep} onChange={handleInputChange} placeholder="CEP" />

            <input type="text" name="uf" value={data.uf} onChange={handleInputChange} placeholder="UF" />

            <input type="text" name="cidade" value={data.cidade} onChange={handleInputChange} placeholder="Cidade" />

            <input type="text" name="bairro" value={data.bairro} onChange={handleInputChange} placeholder="Bairro" />

            {/* <input type="text" name="rua" value={data.rua} onChange={handleInputChange} placeholder="Rua" /> */}

            <input type="text" name="complemento" value={data.complemento} onChange={handleInputChange} placeholder="Complemento" />

        </div>
    )
}

export default Parte2Form;