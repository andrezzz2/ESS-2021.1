Feature: Senha errada Remove page

    Scenario: Tentando fazer remoção de usuário com senha errada
        Given Eu estou no link de remover e o CPF "99999999999" está cadastrado com a senha "senha123"
        When Eu preencho o campo de CPF com "99999999999" e de senha com "12345678"
        And Eu clico no botão "remover"
        Then O site de remocao me mostra uma mensagem de "Senha incorreta."