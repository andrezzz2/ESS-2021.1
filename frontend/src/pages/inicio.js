import {Link} from 'react-router-dom';
import logo from "../assets/img/logo.png";

function Inicio (){
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
                    <h1>Apresentação da página</h1>
                    <section class="principal_secaoum">
            	        <h2>Sub-título um</h2>
            		        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi eleifend, purus quis laoreet faucibus, ante augue malesuada mi, id rhoncus augue lorem eget elit. Ut sollicitudin sodales purus. Phasellus libero felis, blandit nec, commodo ut, imperdiet ut, nibh. Suspendisse potenti. Donec ullamcorper cursus dolor. Duis vitae ipsum. Maecenas dapibus hendrerit diam. Morbi varius, massa id pretium accumsan, nunc lorem congue libero, ut euismod metus libero id nulla. Duis posuere odio sed velit vulputate venenatis. Suspendisse et dui ac metus auctor fringilla. Curabitur interdum augue a pede.</p>
            	        <h2>Sub-título dois</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi eleifend, purus quis laoreet faucibus, ante augue malesuada mi, id rhoncus augue lorem eget elit. Ut sollicitudin sodales purus. Phasellus libero felis, blandit nec, commodo ut, imperdiet ut, nibh. Suspendisse potenti. Donec ullamcorper cursus dolor. Duis vitae ipsum. Maecenas dapibus hendrerit diam. Morbi varius, massa id pretium accumsan, nunc lorem congue libero, ut euismod metus libero id nulla. Duis posuere odio sed velit vulputate venenatis. Suspendisse et dui ac metus auctor fringilla. Curabitur interdum augue a pede.</p>
                    </section>
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

export default Inicio;