import { Page, expect } from "@playwright/test";
import { RoomSelectionLocators } from "../support/locators";

export default class RoomSelectionPage {
  constructor(private page: Page) {}

  async addRoom(roomName: string) {
    const card = this.page.locator(RoomSelectionLocators.roomCardByTitle(roomName));
    await expect(card).toBeVisible({ timeout: 15000 });

    const addBtn = card.locator(RoomSelectionLocators.addButtonInsideCard);
    await expect(addBtn).toBeVisible();
    await addBtn.click();

    const cartItem = this.page.locator(RoomSelectionLocators.cartItemRoomByName(roomName));
    await expect(cartItem).toBeVisible({ timeout: 15000 });
  }
}
