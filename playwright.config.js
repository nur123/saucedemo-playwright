// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // Directory where test files are stored
  testDir: './tests',
  
  // Global timeout for tests (milliseconds)
  timeout: 30 * 1000, // 30 seconds

  // Retry failed tests
  retries: 1,

  // Configure projects for different browsers
  projects: [
    {
      name: 'Chromium', // Chrome/Edge
      use: { browserName: 'chromium' }
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' }
    },
    {
      name: 'WebKit', // Safari
      use: { browserName: 'webkit' }
    }
  ],

  // Run tests in headless mode by default
  use: {
    headless: true,
    // Define a default viewport
    viewport: { width: 1280, height: 720 },
    // Base URL (if your app has a constant base URL)
    baseURL: 'https://www.saucedemo.com',
    // Take screenshots on failure
    screenshot: 'only-on-failure',
    // Trace to debug the tests
    trace: 'on-first-retry',
  },

  // Reporter to generate test results
  reporter: [
    ['list'], // Show results in the console
    ['html', { outputFolder: 'playwright-report' }] // Generate HTML report
  ],
});