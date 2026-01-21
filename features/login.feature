@ui @login
Feature: Autenticação de usuário

  Como um usuário do sistema de reservas
  Quero acessar minha conta através do login
  Para visualizar e gerenciar minhas reservas

  Scenario Outline: Realizar login através do modal "Acessar meu cadastro"
    Given que estou na tela inicial e clico em "Acessar meu cadastro"
    When informo o email "<email>" e a senha "<senha>"
    And tento realizar o login
    Then devo ver "<resultado>"

    Examples:
      | email                | senha         | resultado                                                     |
      | daniela@hotmail.com  | dani00        | painel do usuário exibindo o nome "Daniela Foggiatto"        |
      | daniela@hotmail.com  | senha_errada  | Dados da conta inválidos. Tente novamente.                   |
      | usuario@invalido.com | dani00        | Dados da conta inválidos. Tente novamente.                   |
