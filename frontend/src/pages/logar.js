import Navbar from '../components/navbar.js';

function Login(){
    return(
        <div>
            <Navbar/>
            <section id="search-field">
                <div class="descricao">
                    <h3>Aqui está o nosso historico de pedidos:</h3>
                </div>
                <div class="area-busca">
                    <div class="temp">

                    </div>      
                </div>      
            </section>
            <footer>
                <p><i class="fas fa-utensils"></i> Servindo nosso clientes com excelência desde o começo!<i class="fas fa-heartbeat"></i></p>
            </footer>

        </div>
    );
}

export default Login;