class CartPage {
    constructor(page) {
      this.page = page;
      this.removeButtons = page.locator('.cart_item .cart_button');
      this.checkoutButton = page.locator('#checkout');
    }
  
    async removeItem() {
      await this.removeButtons.first().click();
    }
  
    async checkout() {
      await this.checkoutButton.click();
    }
  }
  
  module.exports = { CartPage };