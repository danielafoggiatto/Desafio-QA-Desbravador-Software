import { Given, When, Then } from "@cucumber/cucumber";
import type { CustomWorld } from "../support/world";

import HomePage from "../pages/HomePage";
import RoomSelectionPage from "../pages/RoomSelectionPage";
import GuestDetailsPage from "../pages/GuestDetailsPage";
import ContactPage from "../pages/ContactPage";
import PaymentPage from "../pages/PaymentPage";
import ConfirmationPage from "../pages/ConfirmationPage";
import CalendarPage from "../pages/CalendarPage";
import CartPage  from "../pages/CartPage";
import { NumHospedesPage } from "../pages";

Given("que estou na página inicial de Reservas Online", async function (this: CustomWorld) {
  const home = new HomePage(this.page);
  await home.open(this.baseUrl);
  await home.assertLoaded();
});

Given('informo o período de {string} até {string}', async function (this: CustomWorld, dataInicio: string, dataFim: string) {
    const calendar = new CalendarPage(this.page);

    await calendar.selectDate('fevereiro', '1');
    await calendar.selectDate('fevereiro', '4');
  }
);

Given(/^informo ["“](.+?)["”] adultos e ["“](.+?)["”] criança até 5 anos \(FREE\)$/, async function (this: CustomWorld, adultos: string, criancaFree: string) {
    await this.numHospedes.setAdults(adultos);
    await this.numHospedes.openChildrenSelector();
    await this.numHospedes.setChildFree(criancaFree);
  }
);

When('clico em "Verificar Disponibilidade"', async function (this: CustomWorld) {
  const numhospedes = new NumHospedesPage(this.page);
  await numhospedes.clickCheckAvailability();
});

When("adiciono o quarto {string}", async function (this: CustomWorld, roomName: string) {
  const room = new RoomSelectionPage(this.page);
  await room.addRoom(roomName);
});

When('clico em "Continuar"', async function (this: CustomWorld) {
  const cart = new CartPage(this.page);
  await cart.clickContinue();
});

When("seleciono a opção de cama {string}", async function (this: CustomWorld, bed: string) {
    const guest = new GuestDetailsPage(this.page);
    await guest.selectBedOption(bed);
  }
);

When('informo os hóspedes adultos {string} e {string} e criança {string}', async function (this: CustomWorld, adulto1: string, adulto2: string, crianca: string) {
    const guest = new GuestDetailsPage(this.page);
    await guest.fillGuests(adulto1, adulto2, crianca);
    await guest.saveGuests();
  }
);

When("seleciono o horário de chegada {string}", async function (this: CustomWorld, horario: string) {
    const guest = new GuestDetailsPage(this.page);
    await guest.selectArrivalTime(horario);
  }
);

When("informo o e-mail {string}", async function (this: CustomWorld, email: string) {
  const contact = new ContactPage(this.page);
  await contact.fillEmail(email);
});

When("informo nome {string} e sobrenome {string}", async function (this: CustomWorld, nome: string, sobrenome: string) {
    const payment = new PaymentPage(this.page);
    
    await payment.fillName(nome, sobrenome);
  }
);

When("seleciono o tipo de documento {string}", async function (this: CustomWorld, tipo: string) {
    const payment = new PaymentPage(this.page);
    await payment.selectDocumentType(tipo);
  }
);

When("informo o documento {string}", async function (this: CustomWorld, doc: string) {
    const payment = new PaymentPage(this.page);
    await payment.fillDocument(doc);
  }
);

When("escolho pagamento por {string}", async function (this: CustomWorld, metodo: string) {
  const payment = new PaymentPage(this.page);
  await payment.selectPaymentMethod(metodo);
});

When("preencho os dados do cartão número {string}, nome {string}, validade {string} e cvc {string}", async function (this: CustomWorld, numero: string, nomeCartao: string, validade: string, cvc: string) {
    const payment = new PaymentPage(this.page);
    await payment.fillCard(numero, nomeCartao, validade, cvc);
  }
);

When("aceito as políticas do hotel", async function (this: CustomWorld) {
  const payment = new PaymentPage(this.page);
  await payment.acceptHotelPolicies();
});

When("resolvo o captcha manualmente", async function (this: CustomWorld) {
    const payment = new PaymentPage(this.page);
    await payment.waitForCaptchaSolved();
  }
);

When(
  'clico em "Finalizar"',
  async function (this: CustomWorld) {
    await this.payment.clickFinish();
  }
);

Then('devo ver a confirmação com {string}', async function (this: CustomWorld, msg: string) {
  const confirmation = new ConfirmationPage(this.page);
  await confirmation.assertSuccessMessage(msg);
});