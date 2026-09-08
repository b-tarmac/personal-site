import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => { await page.goto('/'); });

test('renders the design, metadata and real contact links', async ({ page }) => {
  await expect(page).toHaveTitle(/Jandré Scholtz/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Senior growth');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://www.jandrescholtz.com/');
  await expect(page.getByRole('link', { name: 'Let’s connect on LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/jandre-scholtz');
  const overflowing = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflowing).toBe(false);
});

test('shows result context and collapses it', async ({ page }) => {
  const result = page.getByRole('button', { name: /APP LAUNCH/ });
  await result.click();
  await expect(result).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#result-detail-0')).toContainText('cross-functional team');
  await expect(page.locator('#result-detail-0')).toBeVisible();
  await result.click();
  await expect(page.locator('#result-detail-0')).toBeHidden();
});

test('switches services by click and keyboard', async ({ page }) => {
  const audit = page.getByRole('tab', { name: /AI-Enabled Growth Operations Audit/ });
  await audit.click();
  await expect(audit).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('tabpanel')).toContainText('Start with the bottleneck.');
  await audit.press('Home');
  await expect(page.getByRole('tab').first()).toBeFocused();
  await expect(page.getByRole('tabpanel')).toContainText('Senior ownership.');
});

test('opens and closes FAQ answers', async ({ page }) => {
  const question = page.getByRole('button', { name: 'Do you work internationally?' });
  await question.click();
  await expect(page.locator('#faq-a-4')).toBeVisible();
  await expect(page.locator('#faq-a-4')).toContainText('Cape Town');
  await question.click();
  await expect(page.locator('#faq-a-4')).toBeHidden();
});

test('mobile navigation reaches the contact section', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile menu only');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.locator('.js-mobile').getByRole('button', { name: 'Let’s talk' }).click();
  await expect(page.locator('.js-mobile')).toHaveCount(0);
  await expect(page.locator('#js-contact')).toBeInViewport();
});

test('serves sitemap, robots and social image', async ({ request }) => {
  for (const path of ['/robots.txt', '/sitemap.xml', '/social-preview.png']) {
    const response = await request.get(path);
    expect(response.ok()).toBeTruthy();
  }
});
