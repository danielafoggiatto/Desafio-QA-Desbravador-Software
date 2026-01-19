import { When, Then } from '@cucumber/cucumber';
import CheckoutPage from '../pages/CheckoutPage';

When('clico em checkout', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.clicarCheckout();
});

When('preencho os dados de entrega', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.preencherDadosEntrega();
});

When('clico em continue', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.clicarContinue();
});

When('clico em finish', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.clicarFinish();
});

Then('devo ver a mensagem de sucesso da compra', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.verificarMensagemSucesso();
});