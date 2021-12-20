import {Link} from 'react-router-dom';
//import { historico } from '../assets/historicoPedido';
import logo from "../assets/img/logo.png";

function Navbar(){
    return(
        <section id="header">
            <nav id="navmenu" class="navbar navbar-expand-lg">
                <div class="container container-fluid">
                    <Link to="/" class="navbar-brand">
                        <img id="logo" src={logo} alt=""/>
                    </Link>
                    <div class="collapse navbar-collapse" id="navbarNavThis">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <li><Link to="/login" className="link">Login</Link></li>
                            </li>
                            <li class="nav-item">
                                <li><Link to="/cadastro" className="link">Cadastro</Link></li>
                            </li>
                            <li class="nav-item">
                                <li><Link to="/atualizar" className="link">Atualizar</Link></li>
                            </li>
                            <li class="nav-item">
                                <li><Link to="/remover" className="link">Remover</Link></li>
                            </li>
                            <li class="nav-item">
                                <li><Link to="/historico" className="link" id = "historico">Histórico de pedidos</Link></li>
                            </li>
                            <li class="nav-item">
                                <li><Link to="/about" className="link">Sobre nós</Link></li>
                            </li>
                            
                        </ul>
                    </div>

                </div>
            </nav>
        </section>    
    );
}

export default Navbar;

