Feature: Consistência entre hóspedes solicitados e acomodados

  Scenario: Refletir corretamente os hóspedes acomodados após selecionar o quarto
    Given que selecionei um período válido e informei os hóspedes na busca inicial
    And estou na tela de seleção do quarto "STANDARD ST1"
    When clico em "Comprar"
    Then o resumo deve exibir os hóspedes selecionados em "Solicitadas"
    And os valores em "Acomodadas" devem refletir a mesma quantidade de hóspedes
