Feature: correct Remove page

    Scenario: Fazendo remoção de usuário com CPF cadastrado
        Given Eu estou no link de remover e o CPF "01010101010" está cadastrado com a senha "12345678"
        When Eu preencho o campo de CPF com "01010101010" e de senha com "12345678"
        And Eu clico no botão "remover"
        Then O site de remocao me mostra uma mensagem de "Removido com sucesso."