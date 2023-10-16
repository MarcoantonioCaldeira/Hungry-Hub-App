import React from 'react';
import { Link } from 'react-router-dom';

const Parte3Form = ({ data, onParte3Change }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onParte3Change({ [name]: value });
    };

    return (
        <div>
            <h2>Cadastro de restaurante Parte 3</h2>

            <input type="text" name="foto_Restaurante" value={data.foto_Restaurante} onChange={handleInputChange} placeholder="FOTO" />

            <input type="text" name="nome_restaurante" value={data.nome_restaurante} onChange={handleInputChange} placeholder="Nome do Restaurante" />

            <input type="text" name="descricao" value={data.descricao} onChange={handleInputChange} placeholder="Descrição" />

            <input type="text" name="especialidade" value={data.especialidade} onChange={handleInputChange} placeholder="Especialidade" />
        </div>
    )
}

export default Parte3Form;