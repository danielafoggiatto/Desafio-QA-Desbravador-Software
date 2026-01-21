@critical @bug @ui
Feature: Validação de capacidade do quarto

  Scenario: Permitir avanço indevido com hóspedes acima da capacidade do quarto
    Given que informo o período de "01/02/2026" até "03/02/2026"
    And seleciono 4 adultos e 3 crianças até 5 anos na busca inicial
    When clico em "Continuar Reserva"
    And seleciono o quarto "STANDARD ST1"
    And clico em "Comprar"
    Then o sistema permite avançar até a etapa de pagamento
    But isso deveria ser bloqueado pois excede a ocupação máxima do quarto de 4 pessoas
