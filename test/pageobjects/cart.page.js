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
    return $('a[href="https://myrubylicious.com/product/henza-blouse-khaki/"]');
  }
  get btnAddToCart() {
    return $("button=Add to cart");
  }
  get btnViewCart() {
    return $("a=View cart");
  }
  get btnCheckout() {
    return $("a.*=Proceed to checkout");
  }
  get orderHeading() {
    return $("h3.*=your order");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async cart() {
    await this.btnProduct.click();
    await this.btnAddToCart.click();
    await this.btnViewCart.click();
    await this.btnCheckout.click();
    await this.orderHeading.waitForExist();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("/");
  }
}

export default new CartPage();
