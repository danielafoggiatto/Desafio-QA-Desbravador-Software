import { Page } from '@playwright/test';
import { CalendarLocators } from '../support/locators';

export default class CalendarPage {
  constructor(private page: Page) {}

  async selectDate(
    month: 'janeiro' | 'fevereiro',
    day: string
  ) {
    const monthSelector =
      month === 'janeiro'
        ? CalendarLocators.januaryMonth
        : CalendarLocators.februaryMonth;

    const dayLocator = this.page
      .locator(
        `${monthSelector} ${CalendarLocators.validDay}`
      )
      .filter({ hasText: day });

    await dayLocator.first().click();
  }
}
