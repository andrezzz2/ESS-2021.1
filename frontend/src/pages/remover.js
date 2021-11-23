import {Link} from 'react-router-dom';
import logo from "../assets/img/logo.png";

function Remover(){
    return(
        <div id="tudo"> 

            <div class="topo"> 
                <header class="topo_header">
                    <hgroup>
                        <h1>Site do projeto</h1>
                    </hgroup> 
                </header>
	        </div>
    
            <div class="principal">
                <main>
                    <h1>Atualizar cadastro</h1>
                </main>
	        </div> 
    
            <div class="auxiliar">
                <nav class="auxiliar_navegacao">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li> 
                        <li><Link to="/cadastro">Cadastro</Link></li>
                        <li><Link to="/atualizar">Atualizar</Link></li>
                        <li><Link to="/remover">Remover</Link></li>
                        <li><Link to="/about">Sobre nós</Link></li>
                    </ul>
                </nav>

                <div class="auxiliar_parceiros_imagens">
                    <figure><img src={logo} alt="Logo da Universidade" height="150px" width="150px"/></figure>    
                </div>
            </div> 
    
            <div class="rodape">
                <footer>
                    <small>Site para o projeto - 2021 &copy; Nenhum direito reservado</small>
                </footer>
	        </div>

        </div>
    );
}

export default Remover;