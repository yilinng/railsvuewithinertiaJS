const { test, expect } = require('@playwright/test');

test('expect signup success and logout', async ({ page }) => {

    await page.goto('/signup');
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*signup/);
    await page.locator('input[id="username"]').fill('test123 playwright');
    await page.locator('input[id="email"]').fill('test123@test.com');
    await page.locator('input[id="password"]').fill('test123');
    await page.locator('button[type="submit"]').click();

    await expect.soft(page).not.toHaveURL(/.*signup/);  
  
    // Make a few checks that will not stop the test when failed...
    await expect.soft(page.locator('.alert p')).toHaveText('Invalid email or password.');
    await expect.soft(page.locator('.notice p')).toHaveText( 'Signup in successfully.');   

    expect(test.info().errors).toHaveLength(0);

    await expect(page).not.toHaveURL(/.*signup/);      
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
  //await expect.soft(page.locator('.alert p')).not.toHaveText('Logged in successfully.');
  await expect(page).toHaveURL(/.*signup/);     
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

