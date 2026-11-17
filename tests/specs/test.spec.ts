import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { ProjectsPage } from '../pages/projectspage';

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

test('1 Verify Implement User in ToDo Column and Confirm tags Feature and High Priority', async ({ page }) => {
	const projectsPage = new ProjectsPage(page);
	//await projectsPage.webAppButton.click();

	const card = projectsPage.webToDoColumn.getByText('Implement user authenticationAdd login and signup functionality');
	await expect(card).toBeVisible();
	await expect(card.getByText('Feature')).toBeVisible();
	await expect(card.getByText('High Priority')).toBeVisible();
});

test('2 Verify Fix Nav Bug is in To Do Column and Confirm tag Bug', async ({ page }) => {
	const projectsPage = new ProjectsPage(page);
	//await projectsPage.webAppButton.click();

	const card = projectsPage.webToDoColumn.getByText('Fix navigation bugMenu does');
	await expect(card).toBeVisible();
	await expect(card.getByText('Bug', { exact: true })).toBeVisible();
});

test('3 Design system updates is in the In Progress column and Confirm tag Design', async ({ page }) => {
	const projectsPage = new ProjectsPage(page);
	//await projectsPage.webAppButton.click();

	const card = projectsPage.webInProgressColumn.getByText('Design system updatesUpdate');
	await expect(card).toBeVisible();
	await expect(card.getByText('Design', { exact: true })).toBeVisible();
});

test('4 Verify Push notification system is in To Do Column and Confirm tag Feature', async ({ page }) => {
	const projectsPage = new ProjectsPage(page);
	await projectsPage.mobileAppButton.click();

	const card = projectsPage.mobileToDoColumn.getByText('To Do (1)Push notification');
	await expect(card).toBeVisible();
	await expect(card.getByText('Feature', { exact: true })).toBeVisible();
});

test('5 Verify Offline mode is in In Progress Column and Confirm tags Feature and High Priority', async ({ page }) => {
	const projectsPage = new ProjectsPage(page);
	await projectsPage.mobileAppButton.click();

	const card = projectsPage.mobileInProgressColumn.getByText('Offline modeEnable offline');
	await expect(card).toBeVisible();
	await expect(card.getByText('Feature', { exact: true })).toBeVisible();
	await expect(card.getByText('High Priority', { exact: true })).toBeVisible();
});

test('6 Verify App icon design is in Done Column and Confirm tag Design', async ({ page }) => {
	const projectsPage = new ProjectsPage(page);
	await projectsPage.mobileAppButton.click();

	const card = projectsPage.mobileDoneColumn.getByText('App icon designCreate app');
	await expect(card).toBeVisible();
	await expect(card.getByText('Design', { exact: true })).toBeVisible();
});