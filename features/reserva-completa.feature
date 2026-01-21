@reserva-completa
Feature: Reserva Completa

  
  Scenario: Reserva Completa
    Given que informo o período de "01/02/2026" até "03/02/2026"
    And seleciono 2 adultos na busca inicial
    And seleciono 1 crianças até 5 anos na busca inicial
    When clico em "Continuar Reserva"
    And seleciono o quarto "STANDARD ST1"
    And clico em "Comprar"
    And clico em "Pagar"
    And clico em "Já sou cadastrado"
    And informo meu email e senha
    And clico em "Autenticar(acessar)"
    And clico no checkbox "Concordo com as condições"
    And clico em "Continuar Reserva"
    Then mostra as informações da reserva

