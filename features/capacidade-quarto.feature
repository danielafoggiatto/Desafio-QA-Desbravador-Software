Feature: Validação de capacidade do quarto
  Como um usuário do site de reservas
  Quero que o sistema bloqueie a seleção de quartos quando a quantidade de hóspedes exceder a capacidade máxima
  Para evitar reservas inválidas e garantir que o número de hóspedes caiba corretamente no quarto

  Scenario: Permitir avanço indevido com hóspedes acima da capacidade do quarto
    Given que estou na página inicial do site de reservas online
    And que informo o período de "01/02/2026" até "04/02/2026"
    And seleciono 4 adultos e 3 crianças até 5 anos
    When clico em "Verificar Disponibilidade"
    And adiciono o quarto "STANDARD ST1"
    And clico em "Continuar"
    Then o sistema permite avançar até a etapa de pagamento
    But isso deveria ser bloqueado pois excede a ocupação máxima do quarto de 4 pessoas
