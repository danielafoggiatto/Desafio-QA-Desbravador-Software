Feature: Regras de hóspedes

  Background:
    Given que estou no site de reservas do hotel 1111
    And selecionei um período válido

  Scenario: Bloquear reserva quando não há adultos
    When tento continuar com 0 adultos e 1 criança
    Then devo ver uma mensagem solicitando ao menos 1 adulto
    And não devo conseguir avançar

  Scenario: Permitir continuar quando há ao menos 1 adulto
    When informo 1 adulto e 1 criança até 5 anos
    Then devo conseguir avançar para a próxima etapa
