const { test, expect } = require('@playwright/test');

test('expect login success and logout success', async ({ page }) => {

    await page.goto('/login');
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*login/);
    await page.locator('input[id="email"]').fill('test12@test.com');
    await page.locator('input[id="password"]').fill('test12');
    await page.locator('button[type="submit"]').click();
 
    //const logoutBtn = page.locator('text=Logout');

    //await logoutBtn.click();

    // Make a few checks that will not stop the test when failed...
    //await expect.soft(page.locator('.notice p')).toHaveText('You have been logged out.');    

    // Avoid running further if there were soft assertion failures.
    //expect(test.info().errors).toHaveLength(0);

    await expect(page).toHaveURL(/.*login/);  
});


test('expect login failed', async ({ page }) => {

  await page.goto('/login');
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*login/);
  await page.locator('input[id="email"]').fill('test12@test.com');
  await page.locator('input[id="password"]').fill('test12345');
  await page.locator('button[type="submit"]').click();

  // Make a few checks that will not stop the test when failed...
  //await expect.soft(page.locator('.alert p')).toHaveText('Invalid email or password.'); 
  //await expect.soft(page.locator('.notice p')).not.toHaveText('Logged in successfully.');
  await expect(page).toHaveURL(/.*login/);      
});


test('expect login failed with missing email', async ({ page }) => {

  await page.goto('/login');
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*login/);
  //await page.locator('input[id="email"]').fill('test12@test.com');
  await page.locator('input[id="password"]').fill('test12345');
  await page.locator('button[type="submit"]').click();

  // Make a few checks that will not stop the test when failed...
  await expect.soft(page.locator('.text-red-500')).toHaveText('email have to input..');    
});

test('expect login failed with missing password', async ({ page }) => {

  await page.goto('/login');
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*login/);
  await page.locator('input[id="email"]').fill('test12@test.com');
  //await page.locator('input[id="password"]').fill('test12345');
  await page.locator('button[type="submit"]').click();

  // Make a few checks that will not stop the test when failed...
  await expect.soft(page.locator('.text-red-500')).toHaveText('password have to input..');    
});

test('expect redirect to login page', async ({ page }) => {

  await page.goto('/notes');
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*login/);

  // Make a few checks that will not stop the test when failed...
  await expect.soft(page.locator('.notice p')).toHaveText('You must be logged in to perform that action.');    
});
