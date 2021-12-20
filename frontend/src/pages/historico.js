import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import historico from '../assets/historicoPedido.js';

function Historico(){
    var x = [];
    let tam = (historico.historico).length;
    for(let i = 0; i<tam;i++){
        let element = <tr><td>{historico.historico[i].Restaurant_Name}</td><td>{historico.historico[i].Valor_Pedido}</td><td>{historico.historico[i].Data_Hora}</td></tr>;
        x.push(element);
    }

    console.log(x);
    return(
        <div>
            <Navbar/>
            <section id="search-field">
                <div class="descricao">
                    <h3>Aqui está o nosso historico de pedidos:</h3>
                </div>
                <div class="area-busca">
                    <div class="temp">
                        <table class="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">Nome do Restaurante</th>
                            <th scope="col">Valor do pedido</th>
                            <th scope="col">Data e Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{historico.historico[2].Restaurant_Name}</td>
                            <td>{historico.historico[2].Valor_Pedido}</td>
                            <td>{historico.historico[2].Data_Hora}</td>
                            </tr>
                            {x}
                        </tbody>    
                        </table>    
                    </div>      
                </div>      
            </section>
            <Footer/>
        </div>
    );
}

export default Historico;