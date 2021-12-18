import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

function Cadastro(){
    return(
        <div>
           <Navbar/>
            <section id="search-field">
                <div class="descricao">
                    <h3>Cadastro</h3>
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

export default Cadastro;