import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import axios from "axios";
import {useState} from 'react';

function Remover(){

    const api = axios.create({
        baseURL: "http://localhost:8080/",
    });
    var requisicaoAoServidor = {};
    const [respostaDoServidor, setRespostaDoServidor] = useState(" ");

    function remover(){
        requisicaoAoServidor.cpf = document.querySelector("#cpf").value
        requisicaoAoServidor.password = document.querySelector("#password").value
        console.log(requisicaoAoServidor);
        api.post("/clientes/remover", requisicaoAoServidor).then((response)=>{
            setRespostaDoServidor(response.data);
            console.log(respostaDoServidor);
        });
    }

    return(
        <div>
            <Navbar/>
            <section id="search-field">
                <div class="descricao">
                    <h3>Remoção de clientes:</h3>
                </div>
                <div class="remocao">
                    <p>
                        <label for="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf"/>
                    </p>
                    <p>
                        <label for="password">Senha</label>
                        <input type="password" id="password" name="password"/>
                    </p>
                    <p>
                        <button onClick={remover}>Remover</button>
                    </p>    
                    <h6> {respostaDoServidor} </h6>
                </div>      
            </section>
            <Footer/>
        </div>
    );
}

export default Remover;