Feature: Sem cadastro Remove page

    Scenario: Tentanto fazer remoção de usuário sem CPF cadastrado
        Given Eu estou no link de remover e o CPF "1234543210" não está cadastrado
        When Eu preencho o campo de CPF com "1234543210" e de senha com "12345678"
        And Eu clico no botão "remover"
        Then O site de remocao me mostra uma mensagem de "CPF não cadastrado."