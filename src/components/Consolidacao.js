import React from 'react';
import { connect } from 'react-redux';


class Consolidacao extends React.Component {
   mostraConsolidacao = () => {
      document.getElementById('consolidacao').style.display="flex";
      document.getElementById('consolidacao').style.flexDirection="column";
      
    }
    
    render() {  
      const { dados } = this.props;
      console.log(dados);
      const  { nome, email, cpf, endereço, cidade, estado, tipo, resumo, cargo, descricaoDoCargo } = dados;
    return (
    <div >
      <button onClick={this.mostraConsolidacao}> Consolidar </button>
      <div id="consolidacao">
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Endereço: {endereço}, {tipo}, {cidade} - {estado}</p>
        <p>Resumo do Curriculo: {resumo}</p>
        <p>Cargo: {cargo} </p>
        <p>Descricao: {descricaoDoCargo}</p>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dados: state.dadosPessoais.dadosState,
});

export default connect(mapStateToProps)(Consolidacao);