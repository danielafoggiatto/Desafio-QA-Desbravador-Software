import { setWorldConstructor } from "@cucumber/cucumber";
import type { Browser, Page } from "playwright";

import {
  HomePage,
  CalendarPage,
  NumHospedesPage,
  RoomSelectionPage,
  CartPage,
  GuestDetailsPage,
  ContactPage,
  PaymentPage,
  ConfirmationPage,
} from "../pages";

export class CustomWorld {
  browser!: Browser;
  page!: Page;
  baseUrl!: string;

  home!: HomePage;
  calendar!: CalendarPage;
  numHospedes!: NumHospedesPage;
  roomSelection!: RoomSelectionPage;
  cart!: CartPage;
  guestDetails!: GuestDetailsPage;
  contact!: ContactPage;
  payment!: PaymentPage;
  confirmation!: ConfirmationPage;

  initializePages() {
    this.home = new HomePage(this.page);
    this.calendar = new CalendarPage(this.page);
    this.numHospedes = new NumHospedesPage(this.page);
    this.roomSelection = new RoomSelectionPage(this.page);
    this.cart = new CartPage(this.page);
    this.guestDetails = new GuestDetailsPage(this.page);
    this.contact = new ContactPage(this.page);
    this.payment = new PaymentPage(this.page);
    this.confirmation = new ConfirmationPage(this.page);
  }
}

setWorldConstructor(CustomWorld);
