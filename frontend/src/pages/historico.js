import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import historico from '../assets/historicoPedido.js';

function Historico(){
    return(
        <div>
            <Navbar/>
            <section id="search-field">
                <div class="descricao">
                    <h3>Aqui está o nosso historico de pedidos:</h3>
                </div>
                <div class="area-busca">
                    <div class="temp">
                        {historico.historico[0].Restaurant_Name}
                    </div>      
                </div>      
            </section>
            <Footer/>
        </div>
    );
}

export default Historico;