@critical @ui
Feature: Termos e condições - Continuar Reserva

  Background:
    Given que informo o período de "01/02/2026" até "03/02/2026"
    And seleciono 2 adultos na busca inicial
    And clico em "Continuar Reserva"
    And seleciono o quarto "STANDARD ST1"
    And clico em "Comprar"
    And clico em "Pagar"

  Scenario: Bloquear continuação sem aceitar os termos e condições
    When tento continuar a reserva sem aceitar os termos
    Then devo ver a mensagem "Para continar sua reserva, você deve aceitar os termos e condições do hotel."
    And não devo ver o resumo da hospedagem

  Scenario: Permitir continuação ao aceitar os termos e condições
    When aceito os termos e condições
    And tento continuar a reserva
    Then devo ver o resumo da hospedagem com o nome "Daniela Foggiatto"
