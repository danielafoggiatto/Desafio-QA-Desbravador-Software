import BasePage from './BasePage';
import { Locators } from '../support/locators';

export default class CartPage extends BasePage {
  async abrirCarrinho() {
    await this.page.locator(Locators.cart.cartButton).first().click();
  }

  async verificarCarrinhoVazio() {
    await this.page.waitForSelector(Locators.cart.emptyCart);
  }

  async verificarCarrinhoComItens() {
    await this.page.waitForSelector(Locators.cart.cartTitle);
    await this.page.waitForSelector(Locators.cart.sampleShirtName);
    await this.page.waitForSelector(Locators.cart.sampleShoeName);
  }

  async removerProduto(produto: string) {
    await this.page.locator(Locators.cart.cartListItem).filter({ hasText: produto }).locator(Locators.cart.removeBtn).click();
    await this.page.waitForSelector(Locators.cart.confirmDialog);
    await this.page.locator(Locators.cart.confirmRemoveBtn).click();
  }

  async verificarProdutoRemovido(produto: string) {
    const count = await this.page.locator(`text=${produto}`).count();
    if (count > 0) {
      throw new Error(`Produto ${produto} ainda está presente no carrinho`);
    }
  }

  async aumentarQuantidade(produto: string) {
    await this.page.locator(Locators.cart.cartListItem).filter({ hasText: produto }).locator(Locators.cart.increaseBtn).last().click();
    await this.page.waitForTimeout(1000);
  }

  async diminuirQuantidade(produto: string) {
    await this.page.locator(Locators.cart.cartListItem).filter({ hasText: produto }).locator(Locators.cart.decreaseBtn).first().click();
    await this.page.waitForTimeout(1000);
  }

  async verificarQuantidade(produto: string, quantidade: number) {
    const qtySpan = this.page.locator(Locators.cart.cartListItem).filter({ hasText: produto }).locator(Locators.cart.quantitySpan);
    await qtySpan.waitFor();
    const qtyText = await qtySpan.textContent();
    const qty = parseInt(qtyText || '0');
    if (qty !== quantidade) {
      throw new Error(`Quantidade esperada ${quantidade}, encontrada ${qty}`);
    }
  }
}