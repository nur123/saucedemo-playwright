class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.firstNameInput = page.locator('#first-name');
      this.lastNameInput = page.locator('#last-name');
      this.postalCodeInput = page.locator('#postal-code');
      this.continueButton = page.locator('#continue');
      this.finishButton = page.locator('#finish');
    }
  
    async fillInformation(firstName, lastName, postalCode) {
      await this.firstNameInput.fill(firstName);
      await this.lastNameInput.fill(lastName);
      await this.postalCodeInput.fill(postalCode);
    }
  
    async continueCheckout() {
      await this.continueButton.click();
    }
  
    async finishCheckout() {
      await this.finishButton.click();
    }
  }
  
  module.exports = { CheckoutPage };