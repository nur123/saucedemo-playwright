Playwright Automated Testing for SauceDemo

This repository contains automated tests for the SauceDemo e-commerce website using Playwright. These tests cover various scenarios, including user login, product management, and checkout processes.

How to Running Automation : 

Running All Test Automation : 

npx playwright test 

Running test in a specific browser (e.g., Firefox, Chrome) : 

npx playwright test --project=Chromium
npx playwright test --project=Firefox

Running test a specific test file : 

npx playwright test tests/login.test.js
npx playwright test tests/inventory.test.js
npx playwright test tests/fullflow.test.js