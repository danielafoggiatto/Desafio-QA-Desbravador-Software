import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { LOCATORS } from '../support/locators';

export class ReservaPage extends BasePage {
  constructor(page: Page, baseUrl: string) {
    super(page, baseUrl);
  }

  async preencherPeriodo(dataInicio: string, dataFim: string) {
    const inputs = this.page.locator('input[type="text"]');

    if (await inputs.count() >= 2) {
      try {
        await inputs.nth(0).fill(dataInicio);
        await inputs.nth(1).fill(dataFim);

        await inputs.nth(1).blur();

        return;
      } catch {
      }
    }

    await this.selecionarPeriodoNoCalendario(dataInicio, dataFim);
  }

  private async selecionarPeriodoNoCalendario(dataInicio: string, dataFim: string) {
    const [diaIni, mesIni, anoIni] = dataInicio.split('/');
    const [diaFim, mesFim, anoFim] = dataFim.split('/');

    if (mesIni !== mesFim || anoIni !== anoFim) {
      throw new Error(`Este helper espera mês/ano iguais. Recebi: ${dataInicio} -> ${dataFim}`);
    }

    const mesAno = this.mesAnoPt(mesIni, anoIni);

    await this.clicarDiaNoMes(mesAno, diaIni);
    await this.clicarDiaNoMes(mesAno, diaFim);
  }

  private async clicarDiaNoMes(mesAno: string, dia: string) {
    const diaN = String(Number(dia)); // "01" -> "1"

    const headerSpan = this.page.locator('th.datepickerMonth span', { hasText: mesAno });
    await expect(headerSpan).toHaveCount(1, { timeout: 15000 });

    const calendarioTable = headerSpan.locator('xpath=ancestor::table[1]');
    await expect(calendarioTable).toBeVisible();

    const tdDia = calendarioTable.locator(
        `tbody.datepickerDays td:not(.datepickerNotInMonth):has(span:text-is("${diaN}"))`
    ).first();

    await expect(tdDia).toBeVisible({ timeout: 15000 });

    await tdDia.scrollIntoViewIfNeeded();
    await tdDia.click({ force: true });
    }
 
  private mesAnoPt(mes: string, ano: string) {
    const map: Record<string, string> = {
      '01': 'Janeiro',
      '02': 'Fevereiro',
      '03': 'Março',
      '04': 'Abril',
      '05': 'Maio',
      '06': 'Junho',
      '07': 'Julho',
      '08': 'Agosto',
      '09': 'Setembro',
      '10': 'Outubro',
      '11': 'Novembro',
      '12': 'Dezembro',
    };

    const nomeMes = map[mes];
    if (!nomeMes) throw new Error(`Mês inválido: "${mes}"`);

    return `${nomeMes}, ${ano}`;
  }

  async selecionarAdultos(quantidade: number) {
    await this.selectOption(LOCATORS.DATAS.SELECT_ADULTOS, String(quantidade));
  }

  async selecionarCriancas(quantidade: number) {
    const criancas = this.page.locator(LOCATORS.DATAS.SELECT_CRIANCAS).first();
    if (await criancas.count()) {
      await this.selectOption(LOCATORS.DATAS.SELECT_CRIANCAS, String(quantidade));
    }
  }

  async continuarReserva() {
    const btn = this.page
      .getByRole('button', { name: /continuar reserva/i })
      .or(this.page.getByRole('link', { name: /continuar reserva/i }))
      .or(this.page.locator('text=Continuar Reserva').first());

    await expect(btn).toBeVisible({ timeout: 10000 });
    await Promise.all([
      this.page.waitForLoadState('domcontentloaded'),
      btn.click(),
    ]);
  }

  async aguardarTelaQuartos() {
    await this.page.waitForTimeout(1000);
  }
}
