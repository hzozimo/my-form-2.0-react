import { combineReducers } from 'redux';
import dadosPessoaisReducer from './dadosPessoaisReducer'

const rootReducer = combineReducers({ 
  dadosPessoais: dadosPessoaisReducer,
 });

export default rootReducer;