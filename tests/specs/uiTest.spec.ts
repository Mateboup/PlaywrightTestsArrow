import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Login Tests', () => {

  test('Login Succesfully and verify Admin section is visible', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('banner')).toContainText('cristina 123456789');
    await expect(page.getByLabel('Sidepanel').getByRole('list')).toContainText('Admin');
    await page.getByRole('link', { name: 'Admin' }).click();
    await expect(page.locator('.orangehrm-container')).toBeVisible();
  });

  test('Invalid credentials test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin12');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });
});


