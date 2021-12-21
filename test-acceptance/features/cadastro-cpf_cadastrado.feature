Feature: CPF cadastrado Register page

    Scenario: Fazendo cadastro de usuário com CPF já cadastrado
        Given Eu estou no link do cadastro
        When Eu preencho o campo de nome com "Matheus", sobrenome com "Mariano", CPF com "99999999999", data de nascimento com "22071999", email com "matheus@email.com", o telefone com "912345678" e senha com "senha123"
        And Eu clico no botão "cadastrar"
        Then O site de cadastro me mostra uma mensagem de "CPF já cadastrado."