import cartPage from "../pageobjects/cart.page.js";

describe("Test Cart", () => {
  it("should add an item to the cart", async () => {
    await cartPage.open();
    await cartPage.cart();
    await expect(cartPage.orderHeading).toBeExisting();
  });
});
