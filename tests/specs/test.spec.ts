import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { ProjectsPage } from '../pages/projectspage';

test.describe('Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://create-asana-like-pr-39y5.bolt.host/');
        const loginPage = new LoginPage(page);
        await loginPage.login("admin", "password123");
        await page.pause();
    });
    test.afterEach(async ({ page }) => {
        const projectsPage = new ProjectsPage(page);
        await projectsPage.logout();
    });

    const testData = [
        { tab: "Web Application", column: "To Do", card: "Implement user authentication", tags: ["Feature", "High Priority"] },
        { tab: "Web Application", column: "To Do", card: "Fix navigation bug", tags: ["Bug"] },
        { tab: "Web Application", column: "In Progress", card: "Design system updates", tags: ["Design"] },
        { tab: "Mobile Application", column: "To Do", card: "Push notification system", tags: ["Feature"] },
        { tab: "Mobile Application", column: "In Progress", card: "Offline mode", tags: ["Feature", "High Priority"] },
        { tab: "Mobile Application", column: "Done", card: "App icon design", tags: ["Design"] },
    ];

    for (const data of testData) {
        test(`Test for: ${data.tab}/${data.column}/${data.card}`, async ({ page }) => {
            const tab = page.getByRole('button', { name: data.tab })
            await tab.click();
            const column = page.getByText(data.column).locator("..");
            const card = column.getByText(data.card).locator("..");
            await expect(card).toBeVisible();

            for (const tag of data.tags) {
                await expect(card.getByText(tag, { exact: true })).toBeVisible();
            }
        });
    }
});