// pages/LoginPage.js
import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
	readonly page: Page;
	readonly usernameField: Locator;
	readonly passwordField: Locator;
	readonly loginButton: Locator;
	readonly errorMessage: Locator;

	constructor(page: Page) {
		this.page = page;
		this.usernameField = page.locator('#username');
		this.passwordField = page.locator('#password');
		this.loginButton = page.getByRole("button", { name: "Sign in" });
		this.errorMessage = page.getByText("Invalid username or password");

		//this.usernameField = page.getByRole('textbox', { name: 'Username' });
		//this.passwordField = page.getByRole('textbox', { name: 'Password' });
		//this.loginButton = page.locator('xpath=//input[@name="login"]');//xpath example
		//this.loginButton = page.locator('//input[@name="login"]');//xpath example 2
		//this.loginButton = page.locator('#login');


	}

	async login(username: string, password: string) {

		await this.usernameField.click();
		await this.usernameField.fill(username);
		await this.passwordField.click();
		await this.passwordField.fill(password);
		await this.loginButton.click();
	}
}
