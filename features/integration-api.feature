Feature: Teste de criação de reservas via API
  Como consumidor da API de reservas
  Quero validar que posso criar reservas corretamente
  Para garantir que os dados de disponibilidade e regras do hotel sejam respeitados

  Scenario: Consultar disponibilidade para 1 adulto
    Given que tenho um token de autenticação válido
    And envio uma requisição POST para "/reservas/disponibilidade" com:
      | checkin     | checkout    | adultos | criancas |
      | 2026-02-01  | 2026-02-04  | 1       | 0        |
    When recebo a resposta
    Then a resposta deve ter status 200
    And "wsrolRS.status.resultado" deve ser 1
    And "wsrolRS.status.code" deve ser 0
    And os quartos "ST1", "ST2" e "EX1" devem estar presentes em "wsrolRS.disponibilidadeRS.disponibilidade.result"
    And "ST1.diaria" deve conter os valores para "01/02/2026" até "04/02/2026"
    And "ST1.minimo" deve ser 6

  Scenario: Tentar reservar com hóspedes acima da capacidade
    Given que tenho um token de autenticação válido
    And envio uma requisição POST para "/reservas" com:
      | checkin     | checkout    | adultos | criancas | quarto |
      | 2026-02-01  | 2026-02-04  | 5       | 2        | ST1    |
    When recebo a resposta
    Then a resposta deve ter status 400
    And a mensagem de erro deve indicar "ocupação máxima excedida"

  Scenario: Criar reserva válida
    Given que tenho um token de autenticação válido
    And envio uma requisição POST para "/reservas" com:
      | checkin     | checkout    | adultos | criancas | quarto |
      | 2026-02-01  | 2026-02-04  | 1       | 0        | ST1    |
    When recebo a resposta
    Then a resposta deve ter status 201
    And o corpo da resposta deve conter:
      | quarto | checkin     | checkout    | adultos | criancas |
      | ST1    | 2026-02-01  | 2026-02-04  | 1       | 0        |
