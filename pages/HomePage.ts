import BasePage from './BasePage';
import { Locators } from '../support/locators';

export default class HomePage extends BasePage {
  async validarPaginaInicial() {
    await this.page.waitForSelector(Locators.home.productsTitle);
  }

  async verificarUsuarioLogado(user: string) {
    await this.page.waitForSelector(Locators.home.userLogged(user));
  }

  async verificarProdutos() {
    await this.page.waitForSelector(Locators.home.productsContainer);
  }

  async adicionarProdutoAoCarrinho() {
    await this.page.locator(Locators.home.productItem).first().locator(Locators.home.addToCartBtn).click();
  }

  async verificarProdutoAdicionado() {
    await this.page.waitForSelector(Locators.home.addToCartBtn);
  }

  async adicionarSegundoProdutoAoCarrinho() {
    await this.page.locator(Locators.home.productItem).filter({ hasText: Locators.home.sampleShoeName }).locator(Locators.home.addToCartBtn).click();
  }

  async verificarProdutosAdicionados(count: number) {
    const buttons = await this.page.locator(Locators.home.addToCartBtn).count();
    if (buttons < 9 - count) {
      throw new Error(`Expected at least ${9 - count} buttons, found ${buttons}`);
    }
  }
}
