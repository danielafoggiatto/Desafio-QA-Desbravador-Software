import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

Given('que acesso a página de login', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
});

When(
  'faço login com {string} e {string}',
  async function (user: string, pass: string) {
    await this.loginPage.login(user, pass);
  }
);

Then('devo acessar a página inicial', async function () {
  const homePage = new HomePage(this.page);
  await homePage.validarPaginaInicial();
});

Then('devo ver o usuário {string} logado', async function (user: string) {
  const homePage = new HomePage(this.page);
  await homePage.verificarUsuarioLogado(user);
});

Then('devo ver produtos na página', async function () {
  const homePage = new HomePage(this.page);
  await homePage.verificarProdutos();
});

When('adiciono o primeiro produto ao carrinho', async function () {
  const homePage = new HomePage(this.page);
  await homePage.adicionarProdutoAoCarrinho();
});

Then('o produto deve ser adicionado ao carrinho', async function () {
  const homePage = new HomePage(this.page);
  await homePage.verificarProdutoAdicionado();
});

When('tento fazer login com {string} e {string}', async function (user: string, pass: string) {
  await this.loginPage.tentarLogin(user, pass);
});

Then('devo ver a mensagem de erro {string}', async function (message: string) {
  await this.page.waitForSelector(`text=${message}`);
});
