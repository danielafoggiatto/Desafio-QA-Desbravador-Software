Feature: Login de usuário
  Como um usuário do sistema de reservas
  Quero acessar minha conta através do login
  Para visualizar e gerenciar minhas reservas

  Background:
    Given que estou na tela inicial do site de reservas

  Scenario Outline: Realizar login através da opção "Entrar"
    Given que clico em "Entrar"
    When informo o email "<email>" e a senha "<senha>"
    And tento realizar o login
    Then devo ver "<resultado>"

    Examples:
      | email               | senha         | resultado                                              |
      | daniela@hotmail.com | dani00        | menu do usuário exibindo o nome "Daniela"              |
      | usuario.com         | dani00        | mensagem "Email inválido" abaixo do campo email        |
      | daniela@hotmail.com | senha_errada  | mensagem "Login inválido"                              |
