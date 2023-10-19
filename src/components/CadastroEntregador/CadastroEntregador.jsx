import React, { Component } from 'react';
import Parte1Form from './Parte1Form';
import Parte2Form from './Parte2Form';
import Parte3Form from './Parte3Form';
import axios from 'axios';


class CadastroEntregador extends Component {

    constructor() {
        super();
        this.state = {
            currentStep:1, 
    
            parte1Data: {
               nome:'',
               sobrenome:'',
               email:'',
               cpf:'',
               senha:'',
               confirmarSenha:''
            },

            parte2Data: {
               telefone:'',
               cnh:'',
               Foto_Entregador:''
            },

            parte3Data: {
               cep:'',
               cidade:'',
               bairro:'',
               rua:'',
               numero_casa:''
            }
        };
       };
    
    
    
       handleParte1Change = (parte1Data) =>{
        this.setState((prevState) => ({
            parte1Data: {...prevState.parte1Data, ...parte1Data}
        }));
       };
    
       handleParte2Change = (parte2Data) =>{
        this.setState((prevState) => ({
            parte2Data: {...prevState.parte2Data, ...parte2Data}
        }));
       };
    
       handleParte3Change = (parte3Data) =>{
        this.setState((prevState) => ({
            parte3Data: {...prevState.parte3Data, ...parte3Data}
        }));
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
    
            const entregadorData = {
                nome: parte1Data.nome,
                sobrenome: parte1Data.sobrenome,
                email: parte1Data.email,
                cpf: parte1Data.cpf,
                cnh: parte2Data.cnh,
                telefone: parte2Data.telefone,
                senha: parte1Data.senha,
                confirmarSenha: parte1Data.confirmarSenha,
                endereco:{
                  cep: parte3Data.cep,
                  cidade:parte3Data.cidade,
                  bairro: parte3Data.bairro,
                  rua:parte3Data.rua,
                  numero_casa: parte3Data.numero_casa
                }
            };
    
            try {
                const API_URL = 'http://localhost:5050'; // Substitua pela URL correta da sua API
                const response = await axios.post( API_URL + '/rest/entregador/save', entregadorData);
                console.log(response);
    
                if (response.status === 200) {
                    //this.setState({ showSuccessMessage: true })
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
                <h1>Cadastro de Entregador - Parte {currentStep}</h1>
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

export default CadastroEntregador;