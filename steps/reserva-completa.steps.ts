import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import type { CustomWorld } from "../support/world";

Given('que informo o período de {string} até {string}', async function (inicio, fim) {
    await this.reservaPage.goto();
    await this.reservaPage.preencherPeriodo(inicio, fim);
});


Given("seleciono {int} adultos na busca inicial", async function (this: CustomWorld, adultos: number) {
  await this.reservaPage.selecionarAdultos(adultos);
});

Given("seleciono {int} crianças até {int} anos na busca inicial", async function (this: CustomWorld, criancas: number, idadeMax: number) {
    await this.reservaPage.selecionarCriancas(criancas);
});

When('clico em {string}', async function (this: CustomWorld, btnText: string) {
  await this.reservaPage.clicarPorTexto(btnText);
});


When('seleciono o quarto {string}', async function (this: CustomWorld, quartoNome: string) {
  await this.quartosPage.selecionarQuartoST1();
});

When("informo meu email e senha", async function (this: CustomWorld) {
  const email = "daniela@hotmail.com";
  const senha = "dani00";
  
  await this.page.locator("#usuario").fill(email);
  await this.page.locator("#senha").fill(senha);
});

When('clico no checkbox {string}', async function (this: CustomWorld, _texto: string) {
    await this.page.pause();
    const checkBoxAceptConditions = this.page.locator('#lido');
    checkBoxAceptConditions.click();
    console.log(checkBoxAceptConditions);

    await this.page.getByRole('button', { name: 'Continuar Reserva' }).click();
});


Then("mostra as informações da reserva", async function (this: CustomWorld) {

  const resumo = this.page.locator('#resumo_hospedagem');
  await expect(resumo).toBeVisible();
  
  const texto = await resumo.textContent();
  expect(texto).toContain('Daniela Foggiatto');
  expect(texto).toContain('Fevereiro');
});
