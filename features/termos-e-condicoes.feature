Scenario: Bloquear continuação sem aceitar termos e condições
    Background:
        Given que estou no site de reservas do hotel 1111
        And selecionei datas e hóspedes

    Scenario: Bloquear continuação sem aceitar os termos e condições
        When tento continuar sem aceitar os termos
        Then devo ver a mensagem de que é necessário aceitar os termos
        And não devo conseguir avançar

    Scenario: Permitir continuação ao aceitar os termos e condições
        When aceito os termos e condições
        And tento continuar a reserva
        Then devo conseguir avançar para a próxima etapa