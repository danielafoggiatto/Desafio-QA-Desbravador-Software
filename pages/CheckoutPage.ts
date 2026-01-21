import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { LOCATORS } from '../support/locators';

export class QuartosPage extends BasePage {
  constructor(page: Page, baseUrl: string) {
    super(page, baseUrl);
  }

  async selecionarQuartoST1(adultos: number = 1, criancas: number = 0) {
    const linha = this.page.locator(LOCATORS.QUARTOS.LINHA_ST1).first();
    await expect(linha).toBeVisible({ timeout: 10000 });
    await linha.click();

    const selectAdultos = this.page.locator(LOCATORS.QUARTOS.SELECT_ADULTOS_ST1).first();
    if (await selectAdultos.count()) {
      await selectAdultos.selectOption(String(adultos));
    }

    const selectCriancas = this.page.locator(LOCATORS.QUARTOS.SELECT_CRIANCAS_ST1).first();
    if (await selectCriancas.count()) {
      const disabled = await selectCriancas.isDisabled();
      if (!disabled) {
        await selectCriancas.selectOption(String(criancas)).catch(() => {});
      }
    }
  }


  async getMaxpaxST1(): Promise<number> {
    const maxpaxInput = this.page.locator(LOCATORS.QUARTOS.HIDDEN_MAXPAX_ST1);
    const value = await maxpaxInput.getAttribute('value');
    return value ? Number(value) : 0;
  }


  async comprarST1() {
    const btn = this.page.locator(LOCATORS.QUARTOS.BTN_COMPRA_ST1);
    await expect(btn).toBeVisible({ timeout: 10000 });
    await btn.click();
    await this.page.waitForTimeout(300);
  }

  async isPagarVisible(): Promise<boolean> {
    const btn = this.page.locator(LOCATORS.QUARTOS.BTN_PAGAR);
    return await btn.isVisible().catch(() => false);
  }

  async clicarPagar() {
    const btn = this.page.locator(LOCATORS.QUARTOS.BTN_PAGAR);
    await expect(btn).toBeVisible({ timeout: 10000 });
    await btn.click();
  }

  async selecionarQuarto(quartoNome: string) {
    const items = this.page.locator(LOCATORS.QUARTOS.ITEM_QUARTO);
    const item = items.filter({ hasText: quartoNome }).first();
    await expect(item).toBeVisible({ timeout: 10000 });
    await item.click();
  }
}
