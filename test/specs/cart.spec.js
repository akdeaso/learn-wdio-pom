import cartPage from "../pageobjects/cart.page.js";

describe("Test Cart", () => {
  //positive test case
  it("should add an item to the cart", async () => {
    await cartPage.open("/");
    await cartPage.cart();
    await expect(cartPage.orderHeading).toBeExisting();
  });
  //negative test case
  it("should appear error validation", async () => {
    await cartPage.open("/product/henza-blouse-army/");
    await cartPage.btnAddToCart.click();
    await expect(cartPage.errMessage).toBeExisting();
    await browser.pause(5000);
  });
});
