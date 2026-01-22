import { Page, expect } from '@playwright/test';
import { ContactLocators } from '../support/locators';

export class ContactPage {
  constructor(private page: Page) {}

  async fillEmail(email: string) {
    const input = this.page.locator(ContactLocators.emailInput).first();

    await input.waitFor({ state: "visible", timeout: 15000 });
    await input.click();               // foca
    await input.fill(email);

    await expect(input).toHaveValue(email, { timeout: 5000 }); // confirma que escreveu
  }
}

export default ContactPage;
