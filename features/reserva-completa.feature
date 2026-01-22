@reserva-completa @e2e
Feature: Reserva Completa

  Scenario: Reserva completa até a etapa de confirmação
    Given que estou na página inicial de Reservas Online
    And informo o período de "01/02/2026" até "04/02/2026"
    And informo "2" adultos e "1" criança até 5 anos (FREE)
    When clico em "Verificar Disponibilidade"
    And adiciono o quarto "STANDARD ST1"
    And clico em "Continuar"
    And seleciono a opção de cama "Cama Casal, Berço"
    And informo os hóspedes adultos "Joana" e "Pedro" e criança "Luiza"
    And seleciono o horário de chegada "09:00 - 10:00"
    And clico em "Continuar"
    And informo o e-mail "daniela@hotmail.com"
    And informo nome "Daniela" e sobrenome "Foggiatto"
    And seleciono o tipo de documento "CPF"
    And informo o documento "06171005940"
    And escolho pagamento por "Cartão de Crédito"
    And preencho os dados do cartão número "4000 0000 0000 0044", nome "DESBRAVADOR SOFTWARE", validade "12/26" e cvc "123"
    And aceito as políticas do hotel
    When resolvo o captcha manualmente
    When clico em "Finalizar"
    Then devo ver a confirmação com "Sua reserva está efetuada!"
