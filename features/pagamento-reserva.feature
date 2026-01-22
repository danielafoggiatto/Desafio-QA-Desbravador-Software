Feature: Pagamento da reserva
  Como um hóspede no sistema de reservas
  Quero informar meus dados pessoais e de pagamento
  Para finalizar a reserva com sucesso

  Background:
    Given que estou na página de pagamento da reserva

  Scenario: Exibir validações ao tentar finalizar sem preencher os dados obrigatórios
    When tento finalizar o pagamento sem preencher os dados obrigatórios
    Then devo ver mensagens de validação para os dados pessoais, documento, forma de pagamento e aceite das políticas
    And devo ver a solicitação de validação do reCAPTCHA
    And não devo conseguir finalizar a reserva

  Scenario: Exibir erro ao informar e-mail inválido
    When informo o e-mail "daniela.com"
    And preencho os demais dados obrigatórios
    And tento finalizar o pagamento
    Then devo ver a mensagem "E-mail inválido"
    And não devo conseguir finalizar a reserva

  Scenario: Exibir erro ao informar CPF inválido
    When seleciono o tipo de documento CPF
    And informo um CPF inválido
    And tento finalizar o pagamento
    Then devo ver a mensagem "CPF inválido"
    And não devo conseguir finalizar a reserva

  Scenario: Não permitir finalizar sem aceitar as políticas do hotel
    When preencho os dados pessoais obrigatórios
    And seleciono o tipo de documento CPF
    And informo um CPF válido
    And informo os dados válidos do cartão de crédito
    And não aceito as políticas do hotel
    And tento finalizar o pagamento
    Then devo ver uma mensagem solicitando a aceitação das políticas
    And não devo conseguir finalizar a reserva

  Scenario: Finalizar reserva com cartão de crédito com dados válidos
    When informo um e-mail válido
    And informo primeiro nome e sobrenome
    And seleciono o tipo de documento CPF
    And informo um CPF válido
    And seleciono a forma de pagamento cartão de crédito
    And informo número do cartão, nome impresso, validade e CVC válidos
    And aceito as políticas do hotel
    And valido o captcha
    And finalizo o pagamento
    Then devo ver a confirmação da reserva realizada com sucesso

  Scenario: Selecionar pagamento via PIX
    When seleciono a forma de pagamento PIX
    Then os campos de cartão de crédito não devem ser exibidos

  Scenario: Não permitir finalizar pagamento sem validar o reCAPTCHA
    When preencho todos os dados obrigatórios de pagamento
    And aceito as políticas do hotel
    And não valido o reCAPTCHA
    And tento finalizar o pagamento
    Then devo ver uma mensagem informando que o reCAPTCHA é obrigatório
    And não devo conseguir finalizar a reserva
