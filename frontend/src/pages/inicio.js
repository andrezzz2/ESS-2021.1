import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

function Inicio (){
    return(
        <div>
            <Navbar/>
            <section id="search-field">
                <div class="descricao">
                    
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

export default Inicio;