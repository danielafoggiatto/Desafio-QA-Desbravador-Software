Feature: Validação do período de reserva

  Como usuária do sistema de reservas
  Quero que o período selecionado seja exibido de forma consistente
  Para evitar dúvidas sobre a data de saída da hospedagem

  Scenario: Ajustar automaticamente a data de saída ao selecionar apenas a data de entrada
    Given que estou na página de seleção de datas
    And seleciono apenas a data "01/02/2026" como data de entrada
    And seleciono 1 adulto
    When clico em "Continuar Reserva"
    Then o sistema deve considerar a data de saída como "02/02/2026"
    And o período exibido deve ser de "01/02/2026" até "02/02/2026"
