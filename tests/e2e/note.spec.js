const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/login');
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*login/);
  await page.locator('input[id="email"]').fill('test12@test.com');
  await page.locator('input[id="password"]').fill('test12');
  await page.locator('button[type="submit"]').click();
});


test('expect login success and show noteList', async ({ page }) => {
    // create a locator
    const noteLink = page.locator('text=Notes');

    // Expect an attribute "to be strictly equal" to the value.
    await expect(noteLink).toHaveAttribute('href', '/notes');

    // Click the get notes link.
    await noteLink.click();

    const newnoteLink = page.locator('text=New Note');

    // Expect an attribute "to be strictly equal" to the value.
    await expect(newnoteLink).toHaveAttribute('href', '/notes/new');

    //const logoutBtn = page.locator('text=Logout');

    //await logoutBtn.click();

    //await expect(page).not.toHaveURL(/.*notes/);    
});


test('create new note success', async ({ page }) => {
  // create a locator
  const noteLink = page.locator('text=Notes');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(noteLink).toHaveAttribute('href', '/notes');

  // Click the get notes link.
  await noteLink.click();

  const newnoteLink = page.locator('text=New Note');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(newnoteLink).toHaveAttribute('href', '/notes/new');

  await newnoteLink.click();

  await expect(page).toHaveURL(/.*new/);

  await page.locator('input[id="title"]').fill('Playwright can interact with the web page');

  await page.locator('textarea').fill(`By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to accept or decline it.`);

  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL(/.*notes/);
 
});

test('create new note but missing title', async ({ page }) => {
  // create a locator
  const noteLink = page.locator('text=Notes');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(noteLink).toHaveAttribute('href', '/notes');

  // Click the get notes link.
  await noteLink.click();

  const newnoteLink = page.locator('text=New Note');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(newnoteLink).toHaveAttribute('href', '/notes/new');

  await newnoteLink.click();

  await expect(page).toHaveURL(/.*new/);

 // await page.locator('input[id="title"]').fill('Playwright can interact with the web page');

  await page.locator('textarea').fill(`By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to accept or decline it.`);

  await page.locator('button[type="submit"]').click();

  await expect.soft(page.locator('.titleErr')).toHaveText('title have to input..');    
 
});

test('create new note but missing content', async ({ page }) => {
  // create a locator
  const noteLink = page.locator('text=Notes');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(noteLink).toHaveAttribute('href', '/notes');

  // Click the get notes link.
  await noteLink.click();

  const newnoteLink = page.locator('text=New Note');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(newnoteLink).toHaveAttribute('href', '/notes/new');

  await newnoteLink.click();

  await expect(page).toHaveURL(/.*new/);

  await page.locator('input[id="title"]').fill('Playwright can interact with the web page');

  //await page.locator('textarea').fill(`By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to accept or decline it.`);

  await page.locator('button[type="submit"]').click();

  await expect.soft(page.locator('.contentErr')).toHaveText('content have to input..');    
 
});

test('update note success', async ({ page }) => {
  // create a locator
  const noteLink = page.locator('text=Notes');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(noteLink).toHaveAttribute('href', '/notes');

  // Click the get notes link.
  await noteLink.click();

  const editLink = page.locator('text=Edit').last();
 
  // Expect an attribute "to be strictly equal" to the value.
  //await expect(editLink).toHaveAttribute('href', '/notes');
  await editLink.click();

  await expect(page).toHaveURL(/.*edit/);

  await page.locator('input[id="title"]').fill('Playwright can interact with the web page 123');

  await page.locator('button[type="submit"]').click();

  await expect.soft(page.locator('.notice p')).toHaveText('Note was successfully update.');    

});

test('show note success', async ({ page }) => {
  const noteLink = page.locator('text=Notes');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(noteLink).toHaveAttribute('href', '/notes');

  // Click the get notes link.
  await noteLink.click();

  const showLink = page.locator('.showLink').last();
 
  await expect(showLink).toContainText(/Show/);
  await showLink.click();

  const title = page.locator('.title');
  await expect(title).not.toBeEmpty();

  const content = page.locator('.content');
  await expect(content).not.toBeEmpty();

});

test('delete note success', async ({ page }) => {
  // create a locator
  const noteLink = page.locator('text=Notes');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(noteLink).toHaveAttribute('href', '/notes');

  // Click the get notes link.
  await noteLink.click();

  const deleteLink = page.locator('text=Delete').last();
 
  // Expect an attribute "to be strictly equal" to the value.
  await deleteLink.click();

  await expect.soft(page.locator('.notice p')).toHaveText('Note was successfully destroyed.');    

});