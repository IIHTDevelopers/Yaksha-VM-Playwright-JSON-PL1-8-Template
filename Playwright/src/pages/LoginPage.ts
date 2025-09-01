import { Locator, Page } from "@playwright/test";
const data = JSON.parse(JSON.stringify(require("../Data/login.json")));

export class LoginPage {

  readonly page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private loginErrorMessage: Locator;
  private adminButton: Locator;
  private logOut: Locator;

  constructor(page: Page) {

    this.page = page;
    this.usernameInput = page.locator("");
    this.passwordInput = page.locator("");
    this.loginButton = page.locator("");
    this.loginErrorMessage = page.locator("");
    this.adminButton = page.locator("");
    this.logOut = page.locator("");
  }

  async performLogin() {
  }
}

module.exports = { LoginPage };
