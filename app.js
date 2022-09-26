import logo from './logo.svg';
import './App.css';

import Contacto from './components/pure/contacto';
import ListaContactocomponent from './components/container/listacontactos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      <ListaContactocomponent></ListaContactocomponent>
      </header>
    </div>
  );
}

export default App;
