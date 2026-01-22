import type { Page, Locator } from "playwright";
import { expect } from "@playwright/test";

export default class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url, { waitUntil: "domcontentloaded" });
  }

  locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  async click(selector: string) {
    const el = this.page.locator(selector);
    await expect(el).toBeVisible();
    await el.click();
  }

  async fill(selector: string, value: string) {
    const el = this.page.locator(selector);
    await expect(el).toBeVisible();
    await el.fill(value);
  }

  async selectByValue(selector: string, value: string) {
    const el = this.page.locator(selector);
    await expect(el).toBeVisible();
    await el.selectOption(value);
  }

  async expectTextVisible(text: string) {
    await expect(this.page.getByText(text, { exact: false })).toBeVisible();
  }
}
