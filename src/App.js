import './App.css';
import DadosPessoais from './components/DadosPessoais.js'
import { Provider } from 'react-redux'
import store from './store'
import Consolidacao from './components/Consolidacao';


function App() {
  return (
    <div className="App">
      <Provider store={ store } >
        <DadosPessoais />
        <Consolidacao />
      </Provider>
    </div>
  );
}

export default App;
