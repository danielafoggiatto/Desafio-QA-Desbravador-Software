import { When, Then } from '@cucumber/cucumber';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';

When('clico no ícone do carrinho', async function () {
  const cartPage = new CartPage(this.page);
  await cartPage.abrirCarrinho();
});

Then('devo ver o carrinho vazio', async function () {
  const cartPage = new CartPage(this.page);
  await cartPage.verificarCarrinhoVazio();
});

When('adiciono o segundo produto ao carrinho', async function () {
  const homePage = new HomePage(this.page);
  await homePage.adicionarSegundoProdutoAoCarrinho();
});

Then('dois produtos devem estar no carrinho', async function () {
  const homePage = new HomePage(this.page);
  await homePage.verificarProdutosAdicionados(2);
});

Then('devo ver itens no carrinho', async function () {
  const cartPage = new CartPage(this.page);
  await cartPage.verificarCarrinhoComItens();
});

When('removo o produto {string} do carrinho', async function (produto: string) {
  const cartPage = new CartPage(this.page);
  await cartPage.removerProduto(produto);
});

Then('o produto {string} deve ser removido do carrinho', async function (produto: string) {
  const cartPage = new CartPage(this.page);
  await cartPage.verificarProdutoRemovido(produto);
});

When('aumento a quantidade do produto {string}', async function (produto: string) {
  const cartPage = new CartPage(this.page);
  await cartPage.aumentarQuantidade(produto);
});

Then('a quantidade do produto {string} deve ser {int}', async function (produto: string, quantidade: number) {
  const cartPage = new CartPage(this.page);
  await cartPage.verificarQuantidade(produto, quantidade);
});