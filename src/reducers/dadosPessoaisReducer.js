
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

const updateDados = 'UPDATE_DADOS'

const dadosPessoaisReducer = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case updateDados :
      console.log('aqui')
      return {dadosState: action.payload};  
    default:
    return state;
  }
}

export default dadosPessoaisReducer;