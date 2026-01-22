Feature: Regras de hóspedes
  Como um usuário do site de reservas do hotel
  Quero que o sistema garanta a presença de ao menos um adulto na reserva
  Para evitar buscas inválidas e permitir o avanço correto no fluxo de disponibilidade

  Background:
    Given que estou no site de reservas do hotel 1111
    And selecionei um período válido

  Scenario: Ajustar automaticamente para 1 adulto quando nenhum adulto é selecionado
    When tento verificar a disponibilidade sem selecionar adultos e com 1 criança
    Then o sistema deve considerar automaticamente 1 adulto
    And devo conseguir avançar para a próxima etapa

  Scenario: Permitir continuar quando há ao menos 1 adulto
    When informo 1 adulto e 1 criança até 5 anos
    Then devo conseguir avançar para a próxima etapa
