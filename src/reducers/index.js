import { combineReducers } from 'redux';
import dadosPessoaisReducer from '../reducers/dadosPessoaisReducer'

const rootReducer = combineReducers({ 
  dadosPessoais: dadosPessoaisReducer,
 });

export default rootReducer;