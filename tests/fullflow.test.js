const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { InventoryPage } = require('../pages/inventory.page');
const { CartPage } = require('../pages/cart.page');
const { CheckoutPage } = require('../pages/checkout.page');

test('Full flow test from login to checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  // Randomly add between 2 and 4 items
  const randomItemCount = Math.floor(Math.random() * 3) + 2;
  await inventoryPage.addItemsToCart(randomItemCount);
  await inventoryPage.goToCart();
  
  // Remove one item
  await cartPage.removeItem();
  await expect(page.locator('.cart_item')).toHaveCount(randomItemCount - 1);
  
  // Proceed to checkout
  await cartPage.checkout();
  await checkoutPage.fillInformation('John', 'Doe', '12345');
  await checkoutPage.continueCheckout();
  
  // Complete the checkout
  await checkoutPage.finishCheckout();
  await expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
});