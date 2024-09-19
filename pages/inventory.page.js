class InventoryPage {
    constructor(page) {
      this.page = page;
      this.addToCartButtons = page.locator('.inventory_item .btn_inventory');
      this.cartIcon = page.locator('.shopping_cart_link');
    }
  
    async addItemsToCart(count) {
      for (let i = 0; i < count; i++) {
        await this.addToCartButtons.nth(i).click();
      }
    }
  
    async goToCart() {
      await this.cartIcon.click();
    }
  }
  
  module.exports = { InventoryPage };