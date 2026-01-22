import { Page, expect } from "@playwright/test";
import { NumHospedesLocators } from "../support/locators";

export default class NumHospedesPage {
  constructor(private page: Page) {}

  async setAdults(adultos: string) {
    const input = this.page.locator(NumHospedesLocators.adultsInput);
    await expect(input).toBeVisible();
    await input.fill(adultos);
  }

  async openChildrenSelector() {
    const btn = this.page.locator(NumHospedesLocators.childrenButton);
    await expect(btn).toBeVisible();
    await btn.click();

    await expect(this.page.locator(NumHospedesLocators.childrenMenuOpen)).toBeVisible();
  }

  async setChildFree(qtd: string) {
    const menuOpen = this.page.locator(NumHospedesLocators.childrenMenuOpen);
    if (!(await menuOpen.isVisible().catch(() => false))) {
      await this.openChildrenSelector();
    }

    const input = this.page.locator(NumHospedesLocators.childFreeInput);
    await expect(input).toBeVisible();
    await input.fill(qtd);
  }

  async clickCheckAvailability() {
    const btn = this.page.locator(NumHospedesLocators.checkAvailabilityButton);
    await expect(btn).toBeVisible();
    await btn.click();
  }
}
