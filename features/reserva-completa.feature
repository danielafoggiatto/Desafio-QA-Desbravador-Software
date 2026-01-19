Feature: Reserva completa com pagamento

  Scenario: Realizar reserva do quarto STANDARD ST1 para 3 dias com pagamento
    Given que estou no site de reservas do hotel 1111
    And seleciono um período de 3 diárias com disponibilidade
    And seleciono o quarto "STANDARD ST1"
    And informo 2 adultos e 1 criança até 5 anos
    And informo os dados dos hóspedes
    When tento efetuar o pagamento com cartão de crédito
    Then a reserva deve ser confirmada com número de confirmação
