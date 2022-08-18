const { test, expect } = require('@playwright/test');

test('homepage has Railsvue in title and get started link linking to the login page', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Railsvue/);

  // create a locator
  const getStarted = page.locator('text=Login');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/login');

  // Click the get started link.
  await getStarted.click();
 
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*login/);
});
