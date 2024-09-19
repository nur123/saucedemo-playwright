const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  // Assert if the user is redirected to the inventory page
  await expect(page).toHaveURL(/inventory/);
});