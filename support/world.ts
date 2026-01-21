import { setWorldConstructor } from "@cucumber/cucumber";
import { Browser, Page } from "playwright";
import {
  LoginPage,
  CadastroPage,
  ReservaPage,
  QuartosPage,
  TermosPage,
} from "../pages";

export class CustomWorld {
  browser!: Browser;
  page!: Page;
  baseUrl!: string;
  dialogText?: string | null;

  // Page Objects
  loginPage!: LoginPage;
  cadastroPage!: CadastroPage;
  reservaPage!: ReservaPage;
  quartosPage!: QuartosPage;
  termosPage!: TermosPage;

  /**
   * Inicializa page objects (chamado depois que page é setado)
   */
  initializePages() {
    this.loginPage = new LoginPage(this.page, this.baseUrl);
    this.cadastroPage = new CadastroPage(this.page, this.baseUrl);
    this.reservaPage = new ReservaPage(this.page, this.baseUrl);
    this.quartosPage = new QuartosPage(this.page, this.baseUrl);
    this.termosPage = new TermosPage(this.page, this.baseUrl);
  }
}

setWorldConstructor(CustomWorld);
