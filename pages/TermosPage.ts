import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { LOCATORS } from '../support/locators';

export class TermosPage extends BasePage {
  constructor(page: Page, baseUrl: string) {
    super(page, baseUrl);
  }

  async aceitarTermos() {
    const checkbox = this.page.locator(LOCATORS.TERMOS.CHECKBOX_TERMOS);
    if (await checkbox.count()) {
      const isChecked = await checkbox.isChecked();
      if (!isChecked) {
        await checkbox.check();
      }
    }
  }

  async rejeitarTermos() {
    const checkbox = this.page.locator(LOCATORS.TERMOS.CHECKBOX_TERMOS);
    if (await checkbox.count()) {
      const isChecked = await checkbox.isChecked();
      if (isChecked) {
        await checkbox.uncheck();
      }
    }
  }

  async tentarContinuarSemTermos() {
    await this.clickByText('Continuar Reserva', false);
  }

  async aceitarEContinuar() {
    await this.aceitarTermos();
    await this.clickByText('Continuar Reserva', false);
  }

  async isResumoVisible(): Promise<boolean> {
    return await this.isVisible(LOCATORS.TERMOS.RESUMO_HOSPEDAGEM);
  }

  async getResumoText(): Promise<string> {
    return await this.getText(LOCATORS.TERMOS.RESUMO_HOSPEDAGEM);
  }

  async resumoContemNome(nome: string): Promise<boolean> {
    const resumo = this.page.locator(LOCATORS.TERMOS.RESUMO_HOSPEDAGEM);
    const text = await resumo.textContent();
    return text?.includes(nome) ?? false;
  }

  async isMensagemVisible(mensagem: string): Promise<boolean> {
    return await this.containsText(LOCATORS.MESSAGES.BODY_TEXT, mensagem);
  }
}
