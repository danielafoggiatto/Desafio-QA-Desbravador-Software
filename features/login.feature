  Scenario Outline: Realizar login
    Given que estou na tela de login
    When informo o email "<email>" e a senha "<senha>"
    And tento realizar o login
    Then devo ver a mensagem "<mensagem>"

    Examples:
      | email                 | senha         | mensagem                                     |
      | daniela@hotmail.com   | dani00        | Login realizado com sucesso                  |
      | daniela@hotmail.com   | senha_errada  | Dados da conta inválidos. Tente novamente.   |
      | usuario@invalido.com  | dani00        | Dados da conta inválidos. Tente novamente.   |
