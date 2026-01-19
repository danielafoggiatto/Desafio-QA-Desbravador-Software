Feature: Validação de capacidade do quarto

  Scenario: Permitir avanço com hóspedes acima da capacidade configurada para o quarto
    Given que selecionei uma composição de hóspedes na busca inicial
    And estou na tela de seleção do quarto "STANDARD ST1"
    And existe um limite de ocupação configurado para o quarto
    When clico em "Comprar"
    And avanço até a etapa de login
    Then o sistema deveria bloquear o avanço por exceder a ocupação permitida
    And deveria exibir uma mensagem informando que a ocupação excede o limite do quarto
