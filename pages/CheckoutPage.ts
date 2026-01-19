import BasePage from './BasePage';
import { Locators } from '../support/locators';

export default class CheckoutPage extends BasePage {
  async clicarCheckout() {
    await this.page.locator(Locators.checkout.checkoutBtn).click();
  }

  async preencherDadosEntrega() {
    await this.page.fill(Locators.checkout.firstNameInput, 'John');
    await this.page.fill(Locators.checkout.lastNameInput, 'Doe');
  }

  async clicarContinue() {
    await this.page.locator(Locators.checkout.continueBtn).click();
  }

  async clicarFinish() {
    await this.page.locator(Locators.checkout.finishBtn).click();
  }

  async verificarMensagemSucesso() {
    await this.page.waitForSelector(Locators.checkout.successMessage);
  }
}