@critical @ui
Feature: Validação do período de reserva
  Como usuária
  Quero que o período da reserva seja validado corretamente
  Para evitar inconsistências entre o resumo exibido e as datas reais da hospedagem

  @expected-behavior
  Scenario: Bloquear continuação quando a data de saída não foi informada
    Given que estou na página de seleção de datas
    And seleciono apenas a data "01/02/2026" como data de entrada
    And seleciono 1 adulto
    When clico em "Continuar Reserva"
    Then devo ver uma mensagem solicitando a data de saída
    And não devo conseguir avançar no fluxo de reserva

  @bug @inconsistency
  Scenario: Sistema ajusta automaticamente a data de saída, mas exibe período incorreto no resumo
    Given que estou na página de seleção de datas
    And seleciono apenas a data "01/02/2026" como data de entrada
    And seleciono 1 adulto
    When clico em "Continuar Reserva"
    Then o sistema exibe o resumo com período de "01/02/2026" até "01/02/2026"
    But ao avançar no fluxo a data de saída considerada é "02/02/2026"
