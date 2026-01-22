import { Page, expect } from "@playwright/test";
import { ConfirmationLocators } from "../support/locators";

export default class ConfirmationPage {
  constructor(private page: Page) {}

  async assertSuccessMessage(expected: string) {
    const msg = this.page.locator(ConfirmationLocators.successMessage);
    await expect(msg).toBeVisible();
    await expect(msg).toHaveText(expected);
  }

  async getReservationLocator() {
    const p = this.page.locator(ConfirmationLocators.locatorText);
    await expect(p).toBeVisible();
    return await p.textContent();
  }
}
