import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

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
            <Footer/>
        </div>
    );
}

export default Login;