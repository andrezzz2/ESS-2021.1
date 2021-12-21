Feature: Historico page

    Scenario: Acessar historico a partir da pagina inicial
        Given Eu estou no link "/"
        When Eu clico na aba de "historico de pedidos"
        Then O site me redireciona para a página "historico de pedidos"
        And A tabela com o "histórico de pedidos" é mostrada