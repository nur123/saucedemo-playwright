const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { InventoryPage } = require('../pages/inventory.page');

test('Add 2, 3, and 4 items to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  // Add 2 items
  await inventoryPage.addItemsToCart(2);
  await inventoryPage.goToCart();
  // Assert that 2 items are in the cart
  await expect(page.locator('.cart_item')).toHaveCount(2);
});