import { Page, expect, Locator } from "@playwright/test";


export class MyInfoPage {
  readonly page: Page;
  private spanMsg:Locator;
  readonly myInfoTab: Locator;
  readonly nameField: Locator;
  readonly saveButton: Locator;
  readonly profileDropdown: Locator;
  readonly subTabLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.spanMsg=  page.locator("");

    this.myInfoTab = page.locator('');
    this.nameField = page.locator('');
    this.saveButton = page.locator("").first();
    this.profileDropdown = page.locator("");
    this.subTabLinks = page.locator("");
  }

  /**
 * Navigates to the "My Info" tab and returns the current page URL.
 */

  async clickMyInfoTab() {
  }

/**
 * Clears the name field and returns validation message, if any.
 */

  async clearAndEnterName(){
  }

  /**
 * Updates the user's name in the "My Info" tab and returns the profile name after saving and reloading.
 */

  async updateUniqueNAmeAndVerifyName(newName: string){
  }

  async getDisplayedProfileName(): Promise<string> {
    return "";
  }

  async getSubTabHrefs(): Promise<string[]> {    
    return [];
  }
}
