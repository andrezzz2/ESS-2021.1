import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import axios from "axios";
import {useState} from 'react';

function Cadastro(){
    const api = axios.create({
        baseURL: "http://localhost:8080/",
    });
    var requisicaoAoServidor = {};
    const [respostaDoServidor, setRespostaDoServidor] = useState(" ");

    function cadastrar(){
        requisicaoAoServidor.name = document.querySelector("#name").value;
        requisicaoAoServidor.lastname = document.querySelector("#lastname").value;
        requisicaoAoServidor.cpf = document.querySelector("#cpf").value
        requisicaoAoServidor.birth_date = document.querySelector("#birth_date").value
        requisicaoAoServidor.email = document.querySelector("#email").value
        requisicaoAoServidor.telefone = document.querySelector("#telefone").value
        requisicaoAoServidor.password = document.querySelector("#password").value
        console.log(requisicaoAoServidor);
        api.post("/clientes/cadastrar", requisicaoAoServidor).then((response)=>{
            setRespostaDoServidor(response.data);
            console.log(respostaDoServidor);
        });
    }

    return(
        <div>
           <Navbar/>
            <section id="search-field">
                <div class="descricao">
                    <h3>Cadastro</h3>
                </div>
                <div class="cadastro">
                    <p>
                        <label for="name">Nome</label>
                        <input type="text" id="name" name="name"/>
                    </p>
                    <p>
                        <label for="lastname">Sobrenome</label>
                        <input type="text" id="lastname" name="lastname"/>
                    </p>
                    <p>
                        <label for="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf"/>
                    </p>
                    <p>
                        <label for="birth_date">Data de nascimento</label>
                        <input type="date" id="birth_date" name="birth_date"/>
                    </p>
                    <p>
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email"/>
                    </p>
                    <p>
                        <label for="telefone">Telefone</label>
                        <input type="text" id="telefone" name="telefone"/>
                    </p>
                    <p>
                        <label for="password">Senha</label>
                        <input type="password" id="password" name="password"/>
                    </p>
                    <p>
                        <button onClick={cadastrar}>Cadastrar</button>
                    </p>
                    <p id="resp-cadastrar"> {respostaDoServidor} </p>
                </div>      
            </section>
            <Footer/>
        </div>
    );
}

export default Cadastro;