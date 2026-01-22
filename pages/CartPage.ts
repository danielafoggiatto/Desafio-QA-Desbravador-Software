import { Page } from '@playwright/test';
import { CartLocators } from '..//support/locators';

export default class CartPage {
  constructor(private page: Page) {}

  async clickContinue() {
    const btn = this.page.locator(CartLocators.continueButton);
    await btn.waitFor({ state: "visible" }); 
    await btn.click();
  }

  async hasRoom(roomName: string) {
    await this.page.locator(CartLocators.roomTitle)
      .filter({ hasText: roomName })
      .waitFor();
  }

}
