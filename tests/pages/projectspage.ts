// pages/LoginPage.js
import { expect, Locator, Page } from '@playwright/test';

export class ProjectsPage {
	readonly page: Page;
	readonly logoutButton: Locator;
	readonly webAppButton: Locator;
	readonly webToDoColumn: Locator;
	readonly webInProgressColumn: Locator;

	readonly mobileAppButton: Locator;
	readonly mobileToDoColumn: Locator;
	readonly mobileInProgressColumn: Locator;
	readonly mobileDoneColumn: Locator;


	constructor(page: Page) {
		this.page = page;
		this.logoutButton = page.getByRole('button', { name: 'Logout' });
		this.webAppButton = page.getByRole('button', { name: 'Web Application Main web' });
		this.webToDoColumn = page.getByText('To Do (2)Implement user');
		this.webInProgressColumn = page.getByText('In Progress (1)Design system');

		this.mobileAppButton = page.getByRole('button', { name: 'Mobile Application Native' })
		this.mobileToDoColumn = page.getByText('To Do (1)Push notification');
		this.mobileInProgressColumn = page.getByText('In Progress (1)Offline');
		this.mobileDoneColumn = page.getByText('Done (1)App icon designCreate');
	}

	async logout() {
		await this.logoutButton.click();
	}
}
