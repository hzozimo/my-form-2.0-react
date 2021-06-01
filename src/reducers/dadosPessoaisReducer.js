import { dadosPessoaisActions } from '../actions/dadosPessoaisActions'

const INITIAL_STATE =  {
  nome: '',
  email:'',
  cpf: '',
  endereço: '',
  cidade: '',
  estado:'',
  tipo: '',
  resumo:'',
  cargo: '',
  descricaoDoCargo:'',
}

const dadosPessoaisReducer = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case 'NOME' :
      return { ...state, nome: action.state};
    case 'EMAIL' :
      return {...state, email: action.state};
    default:
    return state;
  }
}

export default dadosPessoaisReducer;