import { Page, expect } from "@playwright/test";
import { GuestDetailsLocators } from "../support/locators";

export default class GuestDetailsPage {
  constructor(private page: Page) {}

  async selectBedOption(bed: string) {
    const label = this.page.locator(GuestDetailsLocators.bedOptionByLabel(bed));
    await expect(label).toBeVisible({ timeout: 15000 });

    const radio = label.locator(
      "xpath=preceding-sibling::input[@type='radio']"
    );

    await expect(radio).toBeVisible({ timeout: 15000 });
    await radio.click({ force: true });
    await expect(radio).toBeChecked({ timeout: 15000 });
  }

  async openGuestsModal(roomName: string = "STANDARD ST1") {
    const card = this.page.locator(
      `.sc-fWIMVP:has(.room-title:has-text("${roomName}"))`
    );
    await expect(card).toBeVisible({ timeout: 15000 });

    const btn = card.getByRole("button", { name: "Hóspedes" });
    await expect(btn).toBeVisible({ timeout: 15000 });
    await expect(btn).toBeEnabled({ timeout: 15000 });

    await btn.scrollIntoViewIfNeeded();
    await btn.click({ timeout: 15000 });
    await this.page.waitForTimeout(300);
    console.log("Botão de hóspedes clicado");
    const modal = this.page.locator(GuestDetailsLocators.modal);

    await expect(modal).toBeVisible({ timeout: 15000 });
  }

  async fillGuests(adulto1: string, adulto2: string, crianca: string) {
    await this.openGuestsModal();

    const modal = this.page.locator(GuestDetailsLocators.modal);
    const inputs = modal.locator('input[type="text"]'); 

    await expect(inputs).toHaveCount(3, { timeout: 15000 });

    await inputs.nth(0).fill(adulto1);
    await inputs.nth(1).fill(adulto2);
    await inputs.nth(2).fill(crianca);
  }

  async saveGuests() {
    const modal = this.page.locator(GuestDetailsLocators.modal);
    await expect(modal).toBeVisible({ timeout: 15000 });

    const btnSave = modal.locator(GuestDetailsLocators.btnSave);
    await expect(btnSave).toBeVisible({ timeout: 15000 });
    await expect(btnSave).toBeEnabled({ timeout: 15000 });

    await btnSave.scrollIntoViewIfNeeded();
    await btnSave.click({ timeout: 15000 });
  }

  async selectArrivalTime(horario: string) {
    const select = this.page.locator(GuestDetailsLocators.arrivalTimeSelect);

    await expect(select).toBeVisible();
    await select.selectOption({ label: horario });
  }
}
