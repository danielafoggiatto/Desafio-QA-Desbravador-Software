Feature: Validação do período de reserva
  Como usuária
  Quero que o período da reserva seja validado corretamente
  Para evitar inconsistências entre o resumo exibido e as datas reais da hospedagem

  Scenario: Bloquear continuação quando a data não foi informada
    Given que estou na página inicial do site de reservas online
    And informo 1 adulto
    When clico em "Verificar Disponibilidade"
    Then devo ver um aviso "Selecione a data no Calendário"

  Scenario: Sistema ajusta automaticamente a data de saída, mas exibe período incorreto no resumo
    Given que estou na página inicial do site de reservas online
    And seleciono apenas a data "01/02/2026" como data de entrada
    And seleciono 1 adulto
    When clico em "Verificar Disponibilidade"
    Then devo ver um aviso "Selecione a data no Calendário"

  Scenario: Impedir seleção de data de saída anterior à data de entrada
    Given que estou na página inicial do site de reservas online
    And seleciono a data "05/02/2026" como data de entrada
    Then as datas anteriores a "05/02/2026" devem estar desabilitadas no calendário

  Scenario: Exibir cores diferentes para início, meio e fim do período selecionado
    Given que estou na página inicial do site de reservas online
    When seleciono o período de "01/02/2026" até "04/02/2026"
    Then a data "01/02/2026" deve estar destacada em azul escuro
    And a data "04/02/2026" deve estar destacada em azul escuro
    And as datas "02/02/2026" e "03/02/2026" devem estar destacadas em azul claro

  Scenario: Aplicar classes corretas ao selecionar um período no calendário
    Given que estou na página inicial do site de reservas online
    When seleciono o período de "01/02/2026" até "04/02/2026"
    Then a data "01/02/2026" deve conter a classe "first-date-selected"
    And a data "04/02/2026" deve conter a classe "last-date-selected"
    And as datas "02/02/2026" e "03/02/2026" devem conter a classe "checked"
