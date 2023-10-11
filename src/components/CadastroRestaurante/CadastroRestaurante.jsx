import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Parte1Form from './Parte1Form';
import Parte2Form from './Parte2Form';
import Parte3Form from './Parte3Form';
import axios from 'axios';
 
 
class CadastroRestaurante extends Component {
   constructor() {
    super();
    this.state = {
        currentStep:1, 

        parte1Data: {
            nome_proprietario: '',
            email: '',
            telefone_Restaurante: '',
            cnpj_cpf:'',
            senha:'',
            confirmarSenha:'',
        },
        parte2Data: {
            cep: '',
            uf: '',
            cidade: '',
            bairro: '',
            numero_end:'',
            complemento:'',
        },
        parte3Data: {
            foto_Restaurante:'',
            nome_restaurante:'',
            descricao:'',
        },
    };
   }

   handleParte1Change = (parte1Data) =>{
    this.setState({ parte1Data });
   };

   handleParte2Change = (parte2Data) =>{
    this.setState({ parte2Data });
   };

   handleParte3Change = (parte3Data) =>{
    this.setState({ parte3Data });
   };

   handleNextStep = () => {
        this.setState((prevState) => ({
        currentStep: prevState.currentStep + 1,
        }));
    };

    handlePreviousStep = () => {
        this.setState((prevState) => ({
        currentStep: prevState.currentStep - 1,
        }));
    };

    handleFormSubmit = async () => {
        const { parte1Data, parte2Data, parte3Data } = this.state;

        const restauranteData = {
            nome_proprietario: parte1Data.nome_proprietario,
            cnpj_cpf: parte1Data.cnpj_cpf,
            telefone_Restaurante: parte1Data.telefone_Restaurante,
            email: parte1Data.email,
            senha: parte1Data.senha,
            confirmarSenha: parte1Data.confirmarSenha,
            foto_Restaurante: parte3Data.foto_Restaurante,
            nome_restaurante: parte3Data.nome_restaurante,
            descricao: parte3Data.descricao,
            complemento: parte2Data.complemento,
            endereco:{
                uf: parte2Data.uf,
                cidade:parte2Data.cidade,
                bairro:parte2Data.bairro,
                numero_end: parte2Data.numero_end
            }
        };

        try {
            const API_URL = 'http://localhost:5050'; // Substitua pela URL correta da sua API
            const response = await axios.post(API_URL + `/rest/restaurante/save`, restauranteData);
            console.log(response);

            if (response.status === 200) {

                setSuccess(true);

                setNome('');
                setEmail('');
                setTelefone('');
                setSenha('');
                setConfirmarSenha('');

            } 

        } catch (error) {
            console.error('Ocorreu um erro ao cadastrar:', error);
        }
    }

   render() {
    const { currentStep } = this.state;
    let formToShow;

    if(currentStep === 1) {
        formToShow = (
            <Parte1Form data={this.state.parte1Data} onParte1Change={this.handleParte1Change} />
        );
    } else if (currentStep === 2) {
        formToShow = (
            <Parte2Form data={this.state.parte2Data} onParte2Change={this.handleParte2Change} />
        );
    } else if  (currentStep === 3) {
        formToShow = (
            <Parte3Form data={this.state.parte3Data} onParte3Change={this.handleParte3Change} />
        );
    }

    return (
        <div>
            <h1>Cadastro de Restaurante - Parte {currentStep}</h1>
            {formToShow}
            {currentStep > 1 && (
                <button onClick={this.handlePreviousStep}>Anterior</button>
            )}
            {currentStep < 3 && (
                <button onClick={this.handleNextStep}>Próximo</button>
            )}
            {currentStep === 3 && (
                <button onClick={this.handleFormSubmit}>Cadastrar</button>
            )}
        </div>
    );
  }
}

export default CadastroRestaurante;