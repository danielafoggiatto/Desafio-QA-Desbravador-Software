Feature: Consistência entre hóspedes solicitados e acomodados
  Como um usuário do site de reservas online
  Quero que o sistema mantenha e reflita corretamente o período e a quantidade de hóspedes selecionados em todas as etapas da reserva
  Para garantir consistência das informações entre a busca, a escolha da acomodação e o resumo da reserva

  Scenario: Refletir corretamente os hóspedes acomodados após selecionar o quarto
    Given que estou na página inicial do site de reservas online
    And informo o período de "01/02/2026" até "04/02/2026"
    And informo 1 adulto
    When clico em "Verificar Disponibilidade"
    Then na página de Acomodações e tarifas deve exibir o período "01/02/2026 - 04/02/2026"
    And deve exibir a quantidade de 1 adulto nas opções de acomodação

  @ui
  Scenario: Preencher campos de período e adultos ao carregar a página de acomodações
    Given que navego para a página de Acomodações e tarifas após verificar disponibilidade
    Then o campo "calendar-checkin-checkout" deve conter "2026-02-01 - 2026-02-04"
    And o campo "calendar-adults" deve conter o valor "1"

  Scenario: Atualizar quantidade de adultos na página de acomodações
    Given que estou na página de Acomodações e tarifas
    And o período exibido é "01/02/2026 - 04/02/2026"
    When altero a quantidade de adultos para 2
    And clico em "Verificar Disponibilidade"
    Then o sistema deve atualizar a quantidade de hóspedes para 2 adultos nas opções de acomodação

  Scenario: Exibir corretamente o resumo da reserva após selecionar um quarto
    Given que estou na página inicial do site de reservas online
    And informo o período de "01/02/2026" até "04/02/2026"
    And informo 2 adultos e 1 criança até 5 anos
    When clico em "Verificar Disponibilidade"
    And adiciono o quarto "STANDARD ST1" à reserva
    Then o resumo da reserva deve exibir o quarto "STANDARD ST1"
    And deve exibir o período de 3 diárias
    And deve exibir 2 adultos e 1 criança

  Scenario: Limpar período e hóspedes ao voltar para a página inicial
    Given que estou na página de Acomodações e tarifas
    And o período exibido é "01/02/2026 - 04/02/2026"
    And a quantidade de adultos exibida é 1
    When clico em "Voltar"
    Then o calendário deve estar sem período selecionado
    And a quantidade de adultos deve estar zerada

  Scenario: Remover um quarto do resumo da reserva
    Given que adicionei o quarto "STANDARD ST1" à reserva
    And o resumo exibe 2 adultos e 1 criança
    When removo o quarto "STANDARD ST1" do resumo
    Then o quarto "STANDARD ST1" não deve mais ser exibido no resumo
    And o resumo da reserva deve exibir a mensagem "Carrinho vazio"

  @melhoria @ux
  Scenario: Manter período e hóspedes ao voltar para a página inicial
    Given que estou na página de Acomodações e tarifas
    And o período exibido é "01/02/2026 - 04/02/2026"
    And a quantidade de adultos exibida é 1
    When clico em "Voltar"
    Then o período "01/02/2026 - 04/02/2026" deve permanecer selecionado no calendário
    And a quantidade de adultos deve permanecer como 1
