Feature: Correct Register page

    Scenario: Fazendo cadastro de usuário não cadastrado
        Given Eu estou no link do cadastro
        When Eu preencho o campo de nome com "Andre", sobrenome com "Rosa", CPF com "12345678910", data de nascimento com "22071999", email com "andre@email.com", o telefone com "912345678" e senha com "senha123"
        And Eu clico no botão "cadastrar"
        Then O site de cadastro me mostra uma mensagem de "Cadastro feito com sucesso."