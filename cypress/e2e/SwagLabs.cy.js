import CheckoutPage from "../pageObjects/CheckoutPage";
import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";

describe("Swag Labs", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Login in with locked_out_user", () => {
    LoginPage.username.click();
    LoginPage.username.type("locked_out_user");
    LoginPage.password.click();
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    LoginPage.errorMessage.should("contain", "Epic sadface: Sorry, this user has been locked out");
  });

  it("Login with wrong password", () => {
  LoginPage.username.click();
  LoginPage.username.type("standard_user");
  LoginPage.password.click();
  LoginPage.password.type("wrong_password");
  LoginPage.loginButton.click();
  LoginPage.loginBox.should("contain","Epic sadface: Username and password do not match any user in this service");
  });

  it("Validate item amount", () => {
    LoginPage.username.click();
    LoginPage.username.type("standard_user");
    LoginPage.password.click();
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    // HomePage.itemAmount.should("contain", 6);
  });

  it("Sort items - Price high to low", () => {
    LoginPage.username.click();
    LoginPage.username.type("standard_user");
    LoginPage.password.click();
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.sortButton.select("Price (high to low)");
    HomePage.highestPrice.should("contain", "Sauce Labs Fleece Jacket");
    HomePage.highestCost.should("contain", "$49.99");
  });

  it("Sort items - Price low to high", () => {
    LoginPage.username.click();
    LoginPage.username.type("standard_user");
    LoginPage.password.click();
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.sortButton.select("Price (low to high)");
    HomePage.lowestPrice.should("contain", "Sauce Labs Onesie");
    HomePage.lowestCost.should("contain", "$7.99");
  });
  
  it("Sort items - Name (Z to A)", () => {
    LoginPage.username.click();
    LoginPage.username.type("standard_user");
    LoginPage.password.click();
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.sortButton.select("Name (Z to A)");
    HomePage.zItem.should("contain", "Test.allTheThings() T-Shirt (Red)");
  });

  it("Validate shopping cart badge amount", () => {
    LoginPage.username.click();
    LoginPage.username.type("standard_user");
    LoginPage.password.click();
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.openTshirt.click();
    HomePage.addToCartTshirt.click();
    HomePage.shoppingCartBadge.should("contain", 1);
    HomePage.backToProducts.click();
    HomePage.openLight.click();
    HomePage.addToCartLight.click();
    HomePage.shoppingCartBadge.should("contain", 2);
  });

  it("Reset App State", () => {
    LoginPage.username.click();
    LoginPage.username.type("standard_user");
    LoginPage.password.click();
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.openTshirt.click();
    HomePage.addToCartTshirt.click();
    HomePage.backToProducts.click();
    HomePage.shoppingCartBadge.should("contain", 1);
    HomePage.burgerButton.click();
    HomePage.resetApp.click();
    HomePage.closeResetApp.click();
    HomePage.shoppingCartBadge.should("contain", "");
  });

  it("Validate shopping cart remove button functionality", () => {
    LoginPage.username.click();
    LoginPage.username.type("standard_user");
    LoginPage.password.click();
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.openTshirt.click();
    HomePage.addToCartTshirt.click();
    HomePage.shoppingCartBadge.should("contain", 1);
    HomePage.removeTshirt.click();
    HomePage.shoppingCartBadge.should("contain", "");
  });

  it("Buy a T-shirt", () => {
    LoginPage.username.click();
    LoginPage.username.type("standard_user");
    LoginPage.password.click();
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.testAllTshirt.click();
    HomePage.addToCartTestAllTshirt.click();
    HomePage.shoppingCartBadge.click();
    HomePage.checkout.click();
    CheckoutPage.firstName.click();
    CheckoutPage.firstName.type("Linda");
    CheckoutPage.lastName.click();
    CheckoutPage.lastName.type("Aušte");
    CheckoutPage.postalCode.click();
    CheckoutPage.postalCode.type("LV-2016");
    CheckoutPage.continueButton.click();
    CheckoutPage.itemName.should("contain", "Test.allTheThings() T-Shirt (Red)");
    CheckoutPage.finishButton.click();
    CheckoutPage.doneOrder.should("contain", "THANK YOU FOR YOUR ORDER");
  });
});
