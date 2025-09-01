import { Page, expect, Locator } from "@playwright/test";

export class MyInfoPage {
  readonly page: Page;
  private spanMsg: Locator;
  readonly myInfoTab: Locator;
  readonly nameField: Locator;
  readonly saveButton: Locator;
  readonly profileDropdown: Locator;
  readonly subTabLinks: Locator;

  constructor(page: Page) {

    this.page = page;
    this.spanMsg = page.locator("");
    this.myInfoTab = page.locator("");
    this.nameField = page.locator("");
    this.saveButton = page.locator("");
    this.profileDropdown = page.locator("");
    this.subTabLinks = page.locator("");
  }

  /**
 * Navigates to the "My Info" tab .
 */
  async clickMyInfoTab() {
  }

  /**
   * Clears the name field .
  */
  async clearAndEnterName() {
  }

  /**
  * Updates the user's name in the "My Info" tab.
  */
  async updateUniqueNAmeAndVerifyName(newName: string) {
  }
}
