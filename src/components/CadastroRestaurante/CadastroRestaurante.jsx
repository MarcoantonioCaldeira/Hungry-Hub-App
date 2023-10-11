import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Parte1Form from './Parte1Form';
import Parte2Form from './Parte2Form';
import Parte3Form from './Parte3Form';
 
class CadastroRestaurante extends Component {
   constructor() {
    super();
    this.state = {
        currentStep:1, 

        parte1Data: {
            nome_proprietario: '',
            email: '',
            telefone: '',
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

   handleParte1Change = (parte3Data) =>{
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