import { expect, Page } from "@playwright/test";
import BasePage from "./BasePage";
import { NumHospedesLocators } from "../support/locators";

export default class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(baseUrl: string) {
    await this.goto(baseUrl);
  }

  async assertLoaded() {
    const adults = this.page.locator(NumHospedesLocators.adultsInput);
    await expect(adults).toBeVisible({ timeout: 15000 });
  }
}
