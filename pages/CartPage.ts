import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { LOCATORS } from '../support/locators';

export class CadastroPage extends BasePage {
  private lastDialogMessage: string | null = null;

  constructor(page: Page, baseUrl: string) {
    super(page, baseUrl);
    this.setupDialogListener();
  }

  private setupDialogListener() {
    this.page.on('dialog', async (dialog) => {
      this.lastDialogMessage = dialog.message();
      await dialog.accept();
    });
  }

  getLastDialogMessage(): string | null {
    return this.lastDialogMessage;
  }

  clearDialogMessage() {
    this.lastDialogMessage = null;
  }

  async abrirTelaCadastro() {
    const link = this.page.getByRole('link', { name: /não sou cadastrado/i });
    await expect(link).toBeVisible({ timeout: 10000 });
    await link.click();

    await expect(this.page.locator(LOCATORS.CADASTRO.FORM_CADASTRO)).toBeVisible();
    await expect(this.page.locator(LOCATORS.CADASTRO.INPUT_PRIMEIRO_NOME)).toBeVisible();
  }

  async limparCampos() {
    await this.fillInput(LOCATORS.CADASTRO.INPUT_PRIMEIRO_NOME, '');
    await this.fillInput(LOCATORS.CADASTRO.INPUT_SOBRENOME, '');
    await this.fillInput(LOCATORS.CADASTRO.INPUT_EMAIL, '');
    await this.fillInput(LOCATORS.CADASTRO.INPUT_EMAIL_CONFIRMACAO, '');
    await this.fillInput(LOCATORS.CADASTRO.INPUT_SENHA, '');
    await this.fillInput(LOCATORS.CADASTRO.INPUT_SENHA_CONFIRMACAO, '');
  }

  async preencherDados(dados: {
    primeiroNome?: string;
    sobrenome?: string;
    email?: string;
    emailConfirmacao?: string;
    senha?: string;
    senhaConfirmacao?: string;
  }) {
    if (dados.primeiroNome) {
      await this.fillInput(LOCATORS.CADASTRO.INPUT_PRIMEIRO_NOME, dados.primeiroNome);
    }
    if (dados.sobrenome) {
      await this.fillInput(LOCATORS.CADASTRO.INPUT_SOBRENOME, dados.sobrenome);
    }
    if (dados.email) {
      await this.fillInput(LOCATORS.CADASTRO.INPUT_EMAIL, dados.email);
    }
    if (dados.emailConfirmacao) {
      await this.fillInput(LOCATORS.CADASTRO.INPUT_EMAIL_CONFIRMACAO, dados.emailConfirmacao);
    }
    if (dados.senha) {
      await this.fillInput(LOCATORS.CADASTRO.INPUT_SENHA, dados.senha);
    }
    if (dados.senhaConfirmacao) {
      await this.fillInput(LOCATORS.CADASTRO.INPUT_SENHA_CONFIRMACAO, dados.senhaConfirmacao);
    }
  }

  async salvar() {
    this.clearDialogMessage();
    await this.click(LOCATORS.CADASTRO.BTN_SALVAR);
    await this.page.waitForTimeout(300);
  }

  async preencherESalvar(dados: {
    primeiroNome?: string;
    sobrenome?: string;
    email?: string;
    emailConfirmacao?: string;
    senha?: string;
    senhaConfirmacao?: string;
  }) {
    await this.limparCampos();
    await this.preencherDados(dados);
    await this.salvar();
  }

  async verificarMensagemValidacao(mensagem: string): Promise<boolean> {
    if (this.lastDialogMessage) {
      return this.lastDialogMessage.includes(mensagem);
    }

    const bodyText = await this.getText(LOCATORS.MESSAGES.BODY_TEXT);
    return bodyText.includes(mensagem);
  }

  async esperarMensagem(mensagem: string, timeout = 5000) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      const found = await this.verificarMensagemValidacao(mensagem);
      if (found) return true;
      await this.page.waitForTimeout(100);
    }
    return false;
  }
}
