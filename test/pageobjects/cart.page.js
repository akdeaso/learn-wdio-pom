import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
  /**
   * define selectors using getter methods
   */
  get btnProduct() {
    return $("a.*=Henza Blouse army");
  }
  get btnAddToCart() {
    return $("button=Add to cart");
  }
  get btnViewCart() {
    return $("a=View cart");
  }
  get btnUpdateCart() {
    return $("button.*=update cart");
  }
  get btnCheckout() {
    return $("a.*=Proceed to checkout");
  }
  get orderHeading() {
    return $("h3.*=your order");
  }
  get errMessage() {
    return $(
      'div[class="message-container container alert-color medium-text-center"]'
    );
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async cart() {
    await this.btnProduct.waitForClickable({ timeout: 5000 });
    await this.btnProduct.click();
    await this.btnAddToCart.click();
    await this.btnViewCart.click();
    await this.btnCheckout.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  async open(path) {
    await super.open(path);
  }
}

export default new CartPage();
