export const CalendarLocators = {
  calendarContainer: '.month-wrapper',
  januaryMonth: '.month1',
  februaryMonth: '.month2',
  validDay: '.day.toMonth.valid',
};

export const NumHospedesLocators = {
  adultsInput: 'input[name="calendar-adults"]',
  childrenButton: 'button.btn-children',
  childrenMenuOpen: '.dropdown-menu.show',
  childFreeInput: '#faixa1', 
checkAvailabilityButton: 'button.btn-secondary:has-text("Verificar Disponibilidade")',
};

export const RoomSelectionLocators = {
  roomCardByTitle: (roomName: string) =>
    `xpath=//p[contains(@class,'room-title') and normalize-space()="${roomName}"]/ancestor::div[contains(@class,'sc-cZwWEx')][1]`,
  addButtonInsideCard: 'button.btn-add:has-text("Adicionar")',
  cartItemRoomByName: (roomName: string) =>
    `p.cart-item-room:has-text("${roomName}")`,
};

export const CartLocators = {
  continueButton: '.cart-resume-next button',
  roomTitle: '.cart-item-room',
  totalValue: '.cart-resume-value',
  summaryContainer: `.sc-jQHtVT:has-text("Resumo")`,
  btnContinue: `.cart-resume-next button:has-text("Continuar")`,
};

export const GuestDetailsLocators = {
  bedOptionByLabel: (bed: string) =>
    `label.form-check-label:has-text("${bed}")`,
  btnGuests: `button:has-text("Hóspedes")`,
  modal: `.modal-content:has(.modal-title:has-text("Hóspedes"))`,
  nameInputs: `.modal-content:has(.modal-title:has-text("Hóspedes")) input[type="text"]`,
  btnSave: `button:has-text("Salvar")`,
  arrivalTimeSelect: `#arrivalTime`,  
  saveGuestsButton:
    `.modal-content:has(.modal-title:has-text("Hóspedes")) button:has-text("Salvar")`,
};

export const ContactLocators = {
  emailInput: 'input[name="email"]',
};

export const PaymentLocators = {
  firstNameInput: 'input[name="firstName"]',
  lastNameInput: 'input[name="lastName"]',
  documentTypeSelect: 'select[name="documentType"]',
  documentInput: 'input[name="document"]',
  paymentMethodByLabel: (metodo: string) =>
  `label.form-check-label:has-text("${metodo}")`,
  cardNumberInput: 'input[name="number"]',
  cardNameInput: 'input[name="name"]',
  cardExpiryInput: 'input[name="expiry"]',
  cardCvcInput: 'input[name="cvc"]',
  hotelPoliciesCheckboxLabel: '.form-check input[type="checkbox"]',
  finishButton: 'button.btn-finish:has-text("Finalizar")',
  recaptchaIframe: 'iframe[title="reCAPTCHA"]',

};

export const ConfirmationLocators = {
  successMessage: 'p:has-text("Sua reserva está efetuada!")',
  locatorText: 'p.locator',
};
