import { Page, expect, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;
  protected baseUrl: string;

  constructor(page: Page, baseUrl: string) {
    this.page = page;
    this.baseUrl = baseUrl;
  }

  async goto(path: string = '') {
    const url = path ? `${this.baseUrl}${path}` : this.baseUrl;
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async fillInput(selector: string, text: string) {
    const input = this.page.locator(selector).first();
    await expect(input).toBeVisible({ timeout: 5000 });
    await input.fill(text);
  }

  async selectOption(selector: string, option: string) {
    const select = this.page.locator(selector).first();
    await expect(select).toBeVisible({ timeout: 5000 });
    await select.selectOption(option);
  }

  async clickByText(text: string, exact: boolean = false) {
    const btn = this.page.getByRole('button', { name: text, exact }).or(
      this.page.getByText(text)
    );
    await expect(btn).toBeVisible({ timeout: 5000 });
    await btn.click();
  }

  async click(selector: string) {
    const element = this.page.locator(selector).first();
    await expect(element).toBeVisible({ timeout: 5000 });
    await element.click();
  }

  async isVisible(selector: string): Promise<boolean> {
    return await this.page.locator(selector).first().isVisible().catch(() => false);
  }

  async getInputValue(selector: string): Promise<string | null> {
    return await this.page.locator(selector).first().inputValue().catch(() => null);
  }

  async containsText(selector: string, text: string): Promise<boolean> {
    const element = this.page.locator(selector).first();
    const content = await element.textContent().catch(() => '');
    return content?.includes(text) ?? false;
  }

  async waitForElement(selector: string, timeout = 5000) {
    await this.page.locator(selector).first().waitFor({ state: 'visible', timeout });
  }

  async getText(selector: string): Promise<string> {
    return (await this.page.locator(selector).first().textContent()) ?? '';
  }

  async waitForUrl(urlPattern: RegExp, timeout = 5000) {
    await this.page.waitForURL(urlPattern, { timeout });
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async clicarPorTexto(btnText: string) {
    const texto = btnText.toLowerCase();
    let btn: Locator;

    if (texto === "comprar") {
      btn = this.page.locator("#bt_compra-ST1");

    } else if (texto === "pagar") {
      btn = this.page
        .locator("#bt_pagar button")
        .or(this.page.locator("#bt_pagar"));

    } else if (texto.includes("autenticar")) {
      btn = this.page.locator('input[type="button"][value*="Autenticar"]');

    } else if (texto.includes("continuar reserva")) {
      btn = this.page
        .locator('button[onclick*="confirmaLeitura"]')
        .or(this.page.locator('button:has-text("Continuar Reserva")'))
        .or(this.page.getByRole("button", { name: /continuar/i }));

    } else {
      const regex = new RegExp(btnText.replace(/\s+/g, "\\s*"), "i");

      btn = this.page
        .getByRole("button", { name: regex })
        .or(this.page.getByRole("link", { name: regex }))
        .first();
    }

    try {
      await btn.first().waitFor({ state: "visible", timeout: 2000 });
      await btn.first().click({ timeout: 1000 });
    } catch {
      await this.page.click(`text=/${btnText}/i`, { timeout: 1000 }).catch(() => {});
    }

    await this.page.waitForTimeout(1000);
  }
}
