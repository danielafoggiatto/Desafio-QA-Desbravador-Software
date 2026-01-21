import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { LOCATORS } from '../support/locators';

export class LoginPage extends BasePage {
  constructor(page: Page, baseUrl: string) {
    super(page, baseUrl);
  }

  async abrirModalLogin() {
    await this.goto();
    await this.page.getByText('Acessar meu cadastro').click();

    const modal = this.page.locator(LOCATORS.LOGIN.MODAL);
    await expect(modal).toBeVisible();
    await expect(modal.locator(LOCATORS.LOGIN.FORM_AUTENTICA)).toBeVisible();
    await expect(modal.locator(LOCATORS.LOGIN.INPUT_USUARIO)).toBeVisible();
    await expect(modal.locator(LOCATORS.LOGIN.INPUT_SENHA)).toBeVisible();
  }

  async preencherCredenciais(email: string, senha: string) {
    const modal = this.page.locator(LOCATORS.LOGIN.MODAL);
    await modal.locator(LOCATORS.LOGIN.INPUT_USUARIO).fill(email);
    await modal.locator(LOCATORS.LOGIN.INPUT_SENHA).fill(senha);
  }

  async realizarLogin(): Promise<string | null> {
    let dialogMessage: string | null = null;

    this.page.once('dialog', async (dialog) => {
      dialogMessage = dialog.message();
      await dialog.accept();
    });

    const modal = this.page.locator(LOCATORS.LOGIN.MODAL);
    await modal.locator(LOCATORS.LOGIN.BTN_AUTENTICAR).click();

    await this.page.waitForTimeout(500);

    return dialogMessage;
  }

  async verificarLoginSucesso(nomeEsperado: string): Promise<boolean> {
    const userBox = this.page.locator(LOCATORS.LOGIN.USER_BOX);
    const isVisible = await userBox.isVisible().catch(() => false);
    
    if (!isVisible) return false;

    const hasNome = await userBox.textContent().then(t => t?.includes(nomeEsperado) ?? false);
    const hasLogoff = await userBox.textContent().then(t => t?.includes('Log-off') ?? false);

    return hasNome && hasLogoff;
  }

  async isModalVisible(): Promise<boolean> {
    return await this.isVisible(LOCATORS.LOGIN.MODAL);
  }
}
