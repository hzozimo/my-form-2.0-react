import './App.css';
import DadosPessoais from './components/DadosPessoais.js'
import { Provider } from 'react-redux'
import store from '../store'


function App() {
  return (
    <div className="App">
      <Provider store={ store } >
        <DadosPessoais />
      </Provider>
    </div>
  );
}

export default App;
