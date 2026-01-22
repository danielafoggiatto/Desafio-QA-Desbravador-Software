Feature: Cadastro de usuário
  Como um visitante do site
  Quero me cadastrar
  Para finalizar uma reserva

  Background:
    Given que estou na página de cadastro de usuário

  Scenario: Cadastro de usuário válido
    When preencho:
      | email               | password | passwordConfirmation | firstName | lastName  |
      | daniela@hotmail.com | abc123   | abc123               | Daniela   | Foggiatto |
    And clico em "Cadastrar"
    Then devo ver uma mensagem de sucesso "Cadastro efetuado"
    And devo ser redirecionado para a página inicial

  @melhoria
  Scenario: Cadastro de usuário válido com login automático
    When preencho:
      | email               | password | passwordConfirmation | firstName | lastName  |
      | daniela@hotmail.com | abc123   | abc123               | Daniela   | Foggiatto |
    And clico em "Cadastrar"
    Then devo ver uma mensagem de sucesso "Cadastro realizado com sucesso"
    And devo ser redirecionado para a área logada
    And devo estar logado automaticamente

  @validation @ui
  Scenario Outline: Bloquear cadastro quando campos obrigatórios ou inválidos
    When tento cadastrar com:
      | email   | password | passwordConfirmation | firstName      | lastName    |
      | <email> | <senha>  | <senha2>             | <primeiroNome> | <sobrenome> |
    Then devo ver a mensagem de validação "<mensagem>" no campo correspondente

    Examples:
      # Campos obrigatórios
      | email           | senha  | senha2 | primeiroNome | sobrenome  | mensagem           |
      |                 | abc123 | abc123 | Daniela      | Foggiatto | Campo obrigatório |
      | a@hotmail.com   |        | abc123 | Daniela      | Foggiatto | Campo obrigatório |
      | a@hotmail.com   | abc123 |        | Daniela      | Foggiatto | Campo obrigatório |
      | a@hotmail.com   | abc123 | abc123 |              | Foggiatto | Campo obrigatório |
      | a@hotmail.com   | abc123 | abc123 | Daniela      |           | Campo obrigatório |

      # Email inválido
      | email               | senha  | senha2 | primeiroNome | sobrenome  | mensagem        |
      | daniela-hotmail.com | abc123 | abc123 | Daniela      | Foggiatto | Email inválido |
      | daniela@.com        | abc123 | abc123 | Daniela      | Foggiatto | Email inválido |

      # Senhas diferentes
      | email               | senha  | senha2 | primeiroNome | sobrenome  | mensagem          |
      | daniela@hotmail.com | abc123 | abc124 | Daniela      | Foggiatto | Valor não confere |

  Scenario: Bloquear cadastro com e-mail já existente
    When tento cadastrar com um e-mail já registrado "daniela@hotmail.com"
    Then devo ver a mensagem "Não foi possível cadastrar"

  @melhoria
  Scenario: Bloquear cadastro com senha fraca
    When tento cadastrar com senha "123"
    Then devo ver a mensagem "Senha muito fraca"
