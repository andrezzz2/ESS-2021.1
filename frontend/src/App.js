import './assets/css/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Cadastrar from './pages/cadastro.js';
import Inicio from './pages/inicio.js';


function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/cadastro" component={Cadastrar} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
