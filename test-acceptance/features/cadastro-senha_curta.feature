Feature: Senha curta Register page

    Scenario: Fazendo cadastro de usuário com uma senha curta
        Given Eu estou no link do cadastro
        When Eu preencho o campo de nome com "zed", sobrenome com "juradoDeMorte", CPF com "00000000000", data de nascimento com "22071999", email com "andre@email.com", o telefone com "912345678" e senha com "senha99"
        And Eu clico no botão "cadastrar"
        Then O site de cadastro me mostra uma mensagem de "A senha deve conter no mínimo 8 dígitos."