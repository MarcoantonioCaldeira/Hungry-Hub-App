import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClienteLogado = () => {
  const [dadosCliente, setDadosCliente] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
        try{
           const URL_API = 'http://localhost:5050'
           const response = await axios.get(`${URL_API}/rest/cliente/get/15`);
           setDadosCliente(response.data);
        }catch(error){
            
           console.error("Erro ao pegar os dados do cliente", error)
        }
    }
        
    fetchData();
  }, []);


  return (

    <div>
      <h2>Dados do Cliente Logado</h2>
      {dadosCliente ? (
        <div>
          <p>Nome: {dadosCliente.nome}</p>
          <p>Email: {dadosCliente.email}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>

  );
};

export default ClienteLogado;
