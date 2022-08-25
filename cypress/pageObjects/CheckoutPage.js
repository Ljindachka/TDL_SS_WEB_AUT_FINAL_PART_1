import BasePage from "./Base.page";

class CheckoutPage extends BasePage {
  static get url() {
    return "https://www.saucedemo.com/checkout-step-one.html";
  }

  static get firstName() {
    return cy.get("#first-name");
  }

  static get lastName() {
    return cy.get("#last-name");
  }

  static get postalCode() {
    return cy.get("#postal-code");
  }

  static get continueButton() {
    return cy.get("#continue");
  }

  static get itemName() {
    return cy.get("#checkout_summary_container");
  }

  static get finishButton() {
    return cy.get("#finish");
  }

  static get doneOrder() {
    return cy.get("#checkout_complete_container");
  }
}

export default CheckoutPage;