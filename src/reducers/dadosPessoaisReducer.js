import { 
  dadosPessoaisAction,
  // emailAction,
  // cpfAction,
  // enderecoAction,
  // cidadeAction,
  // estadoAction,
  // tipoAction
 } from '../actions/dadosPessoaisActions'

const INITIAL_STATE =  {
  dadosState: { nome: '',
  email:'',
  cpf: '',
  endereço: '',
  cidade: '',
  estado:'',
  tipo: '',
  resumo:'',
  cargo: '',
  descricaoDoCargo:'',}
}

const dadosPessoaisReducer = (state = INITIAL_STATE, action) =>{
  console.log('state', state)
  switch(action.type){
    case dadosPessoaisAction :
      return {...state, dadosState: action.payload};
    // case emailAction :
    //   return {...state, email: action.payload};
    // case cpfAction :
    //   return { ...state, cpf: action.payload};
    // case enderecoAction :
    //   return { ...state, endereço: action.payload};
    // case cidadeAction :
    //   return { ...state, cidade: action.payload};
    // case estadoAction :
    //   return { ...state, edtado: action.payload};
    // case tipoAction :
    //   return { ...state, tipo: action.payload};    
    default:
    return state;
  }
}

export default dadosPessoaisReducer;