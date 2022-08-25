import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  // static get itemAmount() {
  //   return cy.get("#inventory_container");
  // }

  static get sortButton() {
    return cy.get("[data-test=product_sort_container]");
  }

  static get highestPrice() {
    return cy.get(".inventory_item_name").first();
  }

  static get highestCost() {
    return cy.get(".inventory_item_price").first();
  }

  static get lowestPrice() {
    return cy.get(".inventory_item_name").first();
  }

  static get lowestCost() {
    return cy.get(".inventory_item_price").first();
  }

  static get zItem() {
    return cy.get(".inventory_item_name").first();
  }

  static get openTshirt() {
    return cy.get("#item_1_title_link");
  }

  static get addToCartTshirt() {
    return cy.get("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  static get shoppingCartBadge() {
    return cy.get("#shopping_cart_container");
  }

  static get backToProducts() {
    return cy.get("#back-to-products");
  }

  static get openLight() {
    return cy.get("#item_0_title_link");
  }

  static get addToCartLight() {
    return cy.get("#add-to-cart-sauce-labs-bike-light");
  }

  static get burgerButton() {
    return cy.get("#react-burger-menu-btn");
  }

  static get resetApp() {
    return cy.get("#reset_sidebar_link");
  }

  static get closeResetApp() {
    return cy.get("#react-burger-cross-btn");
  }

  static get removeTshirt() {
    return cy.get("#remove-sauce-labs-bolt-t-shirt");
  }

  static get testAllTshirt() {
    return cy.get("#item_3_title_link");
  }

  static get addToCartTestAllTshirt() {
    return cy.get("[id='add-to-cart-test.allthethings()-t-shirt-(red)']");
  }

  static get checkout() {
    return cy.get("#checkout");
  }
}

export default HomePage;