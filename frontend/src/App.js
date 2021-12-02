import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Cadastrar from './pages/cadastrar.js';
import Inicio from './pages/inicio.js';
import Alterar from './pages/alterar.js';
import Remover from './pages/remover.js';
import Login from './pages/logar.js';
import Sobre from './pages/sobre.js';
import Historico from './pages/historico.js';


function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/cadastro" component={Cadastrar} />
          <Route path="/atualizar" component={Alterar} />
          <Route path="/remover" component={Remover} />
          <Route path="/login" component={Login} />
          <Route path="/historico" component={Historico} />
          <Route path="/about" component={Sobre} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
