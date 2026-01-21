import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { CustomWorld } from "./world";

setDefaultTimeout(45 * 60 * 1000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });

  const context = await this.browser.newContext();
  this.page = await context.newPage();

  // URL base do sistema de reservas
  this.baseUrl = "https://reservas.desbravador.com.br/1111";

  // Inicializa page objects
  this.initializePages();
});

After(async function (this: CustomWorld) {
  await this.page?.close();
  await this.browser?.close();
});
