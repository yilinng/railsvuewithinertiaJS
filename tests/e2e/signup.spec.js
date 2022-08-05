const { test, expect } = require('@playwright/test');

test('expect signup success and logout', async ({ page }) => {

    await page.goto('/signup');
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*signup/);
    await page.locator('input[id="username"]').fill('test12 playwright');
    await page.locator('input[id="email"]').fill('test12@test.com');
    await page.locator('input[id="password"]').fill('test12');
    await page.locator('button[type="submit"]').click();
  
    // Make a few checks that will not stop the test when failed...
    //await expect.soft(page.locator('.alert p')).toHaveText('Invalid email or password.');
    const logoutBtn = page.locator('text=Logout');

    await logoutBtn.click();

    await expect(page).not.toHaveURL(/.*notes/);      
});

test('expect signup failed with invaild email', async ({ page }) => {

  await page.goto('/signup');
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*signup/);
  await page.locator('input[id="username"]').fill('test12 playwright');
  await page.locator('input[id="email"]').fill('test12@test.com');
  await page.locator('input[id="password"]').fill('test12');
  await page.locator('button[type="submit"]').click();

  // Make a few checks that will not stop the test when failed...
  await expect.soft(page.locator('.alert p')).toHaveText('Invalid email or password.');
     
});

test('expect signup failed with missing email', async ({ page }) => {

  await page.goto('/signup');
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*signup/);
  await page.locator('input[id="username"]').fill('test12 playwright');
  //await page.locator('input[id="email"]').fill('test12@test.com');
  await page.locator('input[id="password"]').fill('test12345');
  await page.locator('button[type="submit"]').click();

  // Make a few checks that will not stop the test when failed...
  await expect.soft(page.locator('.text-red-500')).toHaveText('email have to input..');    
});

test('expect signup failed with missing password', async ({ page }) => {

  await page.goto('/signup');
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*signup/);
  await page.locator('input[id="username"]').fill('test12 playwright');
  await page.locator('input[id="email"]').fill('test12@test.com');
  //await page.locator('input[id="password"]').fill('test12345');
  await page.locator('button[type="submit"]').click();

  // Make a few checks that will not stop the test when failed...
  await expect.soft(page.locator('.text-red-500')).toHaveText('password have to input..');    
});

