import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "";
  }

  static get username() {
    return cy.get("#user-name");
  }

  static get password() {
    return cy.get("#password");
  }

  static get loginButton() {
    return cy.get("#login-button");
  }

  static get errorMessage() {
    return cy.get("#login_button_container");
  }

  static get loginBox() {
    return cy.get(".login-box");
  }
}

export default LoginPage;