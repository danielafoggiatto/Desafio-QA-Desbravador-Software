import BasePage from './BasePage';
import { Locators } from '../support/locators';

export default class LoginPage extends BasePage {
  private url = 'https://practice.qabrains.com/ecommerce/login';

  async open() {
    await super.open(this.url);
  }

  async login(user: string, pass: string) {
    const username = this.page.locator(Locators.login.username);
    const password = this.page.locator(Locators.login.password);
    const loginBtn = this.page.locator(Locators.login.loginBtn);
    await username.fill(user);
    await password.fill(pass);
    await loginBtn.click();
    await this.page.waitForURL((url) => !url.pathname.includes('/login'));
  }

  async tentarLogin(user: string, pass: string) {
    const username = this.page.locator(Locators.login.username);
    const password = this.page.locator(Locators.login.password);
    const loginBtn = this.page.locator(Locators.login.loginBtn);
    await username.fill(user);
    await password.fill(pass);
    await loginBtn.click();
  }
}
