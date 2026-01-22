import { Page, expect } from '@playwright/test';
import { PaymentLocators } from '../support/locators';

export class PaymentPage {
  constructor(private page: Page) {}

  async fillName(nome: string, sobrenome: string) {
    const first = this.page.locator('input[name="firstName"]:visible');
    const last  = this.page.locator('input[name="lastName"]:visible');

    await first.waitFor({ state: "visible", timeout: 15000 });
    await expect(first).toBeEditable({ timeout: 15000 });

    await first.click();
    await first.fill(nome);
    await first.press("Tab"); 
    await this.page.waitForTimeout(200);

    if ((await first.inputValue()) !== nome) {
      await first.click();
      await first.fill(nome);
      await first.press("Tab");
    }

    await last.waitFor({ state: "visible", timeout: 15000 });
    await last.click();
    await last.fill(sobrenome);
    await last.press("Tab");
    await this.page.waitForTimeout(200);

    await expect(first).toHaveValue(nome, { timeout: 5000 });
    await expect(last).toHaveValue(sobrenome, { timeout: 5000 });
  }




  async selectDocumentType(tipo: string) {
    const select = this.page.locator(PaymentLocators.documentTypeSelect);
    await expect(select).toBeVisible();
    await select.selectOption({ label: tipo });
  }

  async fillDocument(documento: string) {
    await this.page.locator(PaymentLocators.documentInput).fill(documento);
  }
  
  async fillCard(numero: string, nomeCartao: string, validade: string, cvc: string) {
    await this.page.locator(PaymentLocators.cardNumberInput).fill(numero);
    await this.page.locator(PaymentLocators.cardNameInput).fill(nomeCartao);
    await this.page.locator(PaymentLocators.cardExpiryInput).fill(validade);
    await this.page.locator(PaymentLocators.cardCvcInput).fill(cvc);
  }

  async selectPaymentMethod(metodo: string) {
    const label = this.page.locator(`label.form-check-label:has-text("${metodo}")`);
    await label.click();

    const radio = label.locator('..').locator('input[type="radio"]');
    await expect(radio).toBeChecked();
  }

  async acceptHotelPolicies() {
    const label = this.page.locator(PaymentLocators.hotelPoliciesCheckboxLabel);
    await expect(label).toBeVisible();
    await label.click();
  }

  async waitForCaptchaSolved() {
    await expect(
      this.page.locator(PaymentLocators.recaptchaIframe)
    ).toBeVisible();

    console.log("🛑 Aguardando resolução manual do reCAPTCHA...");
    await this.page.pause();

    console.log("✅ Captcha resolvido, seguindo fluxo...");
  }
  
  async clickFinish() {
    const btn = this.page.locator(PaymentLocators.finishButton);

    await btn.waitFor({ state: "visible" });
    await expect(btn).toBeEnabled();

    await btn.click();
  }

}

export default PaymentPage;
