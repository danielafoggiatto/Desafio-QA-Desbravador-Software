@integration @api @hybrid
Feature: Integração HTTP (HTML) e consistência UI x Backend - Reservas Online

  # O sistema usa XHR que retorna fragmentos HTML (text/html).
  # Objetivo: validar estabilidade do endpoint e consistência do carregamento na UI.

  Background:
    Given que estou na etapa de escolha de tarifa/quarto

  @api @smoke
  Scenario: API HTML responde com detalhes do quarto (page_show.php - ST1)
    When faço um GET em "page_show.php" para o tipo "ST1"
    Then a resposta deve retornar status 200
    And o header "content-type" deve conter "text/html"
    And o corpo deve conter ">STANDARD ST1</h4>"
    And o corpo deve conter "ativaGaleria();"

  @hybrid @ui
  Scenario: UI carrega detalhes do quarto via backend (page_show.php - ST1)
    When seleciono o quarto "STANDARD ST1" na interface
    Then deve ocorrer uma requisição para "page_show.php" do tipo "ST1"
    And a UI deve exibir o título do quarto "STANDARD ST1"
