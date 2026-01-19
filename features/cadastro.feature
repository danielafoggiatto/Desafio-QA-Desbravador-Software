Feature: Cadastro de usuário

  Background:
    Given que estou na tela de cadastro

  Scenario Outline: Bloquear cadastro quando campos obrigatórios não são preenchidos
    When tento salvar o cadastro com primeiro nome "<primeiroNome>", sobrenome "<sobrenome>", email "<email>", repetir email "<email2>", senha "<senha>" e repetir senha "<senha2>"
    Then devo ver a mensagem de validação "<mensagem>"

    Examples:
      | primeiroNome | sobrenome  | email           | email2          | senha  | senha2 | mensagem                                           |
      |              | Foggiatto  | a@hotmail.com   | a@hotmail.com   | abc123 | abc123 | A informação  ( Primeiro Nome ) e obrigatoria.     |
      | Daniela      |            | a@hotmail.com   | a@hotmail.com   | abc123 | abc123 | A informação  ( Sobrenome ) e obrigatoria.         |
      | Daniela      | Foggiatto  |                 | a@hotmail.com   | abc123 | abc123 | A informação  ( E-mail ) e obrigatoria.            |
      | Daniela      | Foggiatto  | a@hotmail.com   |                 | abc123 | abc123 | A informação  ( Repita seu E-mail ) e obrigatoria. |
      | Daniela      | Foggiatto  | a@hotmail.com   | a@hotmail.com   |        | abc123 | A informação  ( Senha ) e obrigatoria.             |
      | Daniela      | Foggiatto  | a@hotmail.com   | a@hotmail.com   | abc123 |        | A informação  ( Repita a Senha ) e obrigatoria.    |

  Scenario Outline: Validar confirmação de e-mail e senha no cadastro
    When preencho primeiro nome "Daniela", sobrenome "Foggiatto", email "<email>", repetir email "<email2>", senha "<senha>" e repetir senha "<senha2>"
    And tento salvar o cadastro
    Then devo ver a mensagem de validação "<mensagem>"

    Examples:
      | email           | email2          | senha  | senha2 | mensagem                                                       |
      | a@a.com         | b@b.com         | abc123 | abc123 | Os campos de login (e-mail) não são idênticos. Repita         |
      | a@a.com         | a@a.com         | abc123 | xyz999 | Os campos de senha, não são identicos.                        |
      | a@a.com         | a@a.com         | abc123 | abc123 | O e-mail informado não tem um formato válido. Repita.         |
      | a@hotmail.com   | a@hotmail.com   | abc123 | abc123 | Cadastro realizado com sucesso                                |
