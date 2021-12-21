Feature: Email utilizado Register page

    Scenario: Fazendo cadastro de usuário com email já utilizado
        Given Eu estou no link do cadastro
        When Eu preencho o campo de nome com "katarina", sobrenome com "juradaDeMorte", CPF com "00000000000", data de nascimento com "22071999", email com "matheus@email.com", o telefone com "912345678" e senha com "senha999"
        And Eu clico no botão "cadastrar"
        Then O site de cadastro me mostra uma mensagem de "Email já utilizado."