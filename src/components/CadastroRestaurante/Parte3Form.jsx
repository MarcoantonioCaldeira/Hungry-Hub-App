import React from 'react';

const Parte3Form = ({ data, onParte3Change }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onParte3Change({ [name]: value });
    };

    return (
        <div>
            <h2>"Cadastro de restaurante Parte3"</h2>

            <input type="text" name="Foto" value={data.foto_Restaurante} onChange={handleInputChange} placeholder="FOTO" />

            <input type="text" name="cidade" value={data.nome_restaurante} onChange={handleInputChange} placeholder="Nome do Restaurante" />

            <input type="text" name="bairro" value={data.descricao} onChange={handleInputChange} placeholder="Descrição" />

        </div>
    )
}

export default Parte3Form;