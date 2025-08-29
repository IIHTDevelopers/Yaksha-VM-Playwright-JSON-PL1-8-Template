import { Locator, Page } from "@playwright/test";
import { test, expect } from '@playwright/test';

import path from "path";
const filePath = path.resolve(__dirname, "../../TestImage.jpg");

export class MyInfoPage {
  readonly page: Page;
  private gpa: Locator;
  private table: Locator;
  private languageComment : Locator;
  private editEducationBtn: Locator;
  private selectDropdown : Locator;
  private checkBox : Locator;
  private confirmDel: Locator;
  private editBtn : Locator;
  private saveQualiBtn:Locator;
  private Myinfo: Locator;
  private compInput :Locator;
   private qualificationBtn: Locator;
  private expAddbtn : Locator;
  private title : Locator;
  private empList : Locator;
  private delBtn: Locator;
  private delEducationBtn: Locator;
  private skillInput : Locator;
  private yearInput: Locator;
  private tableYear : Locator;
  constructor(page: Page) {
    this.page = page;
    this.tableYear = this.page.locator("");
    this.table = this.page.locator("");
    this.languageComment= page.locator("");
    this.yearInput = page.locator("");
    this.skillInput= page.locator("");
    this.delEducationBtn = page.locator("")
    this.editEducationBtn=page.locator("")
    this.gpa = page.locator("");
    this.selectDropdown = page.locator("");
    this.checkBox= page.locator("");
    this.confirmDel = page.locator("");
    this.editBtn= page.locator("");
    this.delBtn= page.locator("");
    this.empList = page.locator("");
    this.title =page.getByLabel('');
    this.saveQualiBtn = page.locator("");
    this.compInput=page.locator("");
    this.expAddbtn = page.locator("");
    this.Myinfo = page.locator("");
    
    this.qualificationBtn = page.locator("");
    
  }


  /**
 * Adds a qualification record for the user.
 *
 * Fills company and job title, saves the entry, and the updated list.
 *
 * @param compInput - Company name
 * @param jobTitle - Job title

 */

  async addQualification(compInput: string, jobTitle: string){
  }


  /**
 * Edits an existing qualification entry.
 *
 * Updates the company name and  updated list.
 *
 * @param editInput - Updated company name
 * 
 */

  async editQualification(editInput: string){
  }

  /**
 * Adds and deletes a qualification entry.
 *
 * Adds a qualification with the provided company name, deletes it, and pdated list.
 *
 * @param delUser - Company name to be added and then deleted
 * @param jobTitle - Job title associated with the qualification

 */



  async deleteQualification(delUser: string, jobTitle: string){
  }

  /**
 * Deletes multiple selected qualification entries.
 *
 * Selects specific checkboxes, deletes the entries, and the toast confirmation message.
 *
 */


  async deleteMultiple(){
  }


  /**
 * Adds a new education entry with the given GPA to the user's qualifications.
 *
 * Selects an education level, inputs GPA, and saves the entry.
 *
 * @param GPA - The GPA value to be added.
 */


  async addEducation(GPA:string){
  }

  /**
 * Edits an existing education entry with a new GPA value.
 *
 * Navigates to the Education tab, updates the GPA, and saves changes.
 *
 * @param GPA - The new GPA value to update.
 */

  async editEducation(GPA:string){
  
  }

  

  /**
 * Adds a skill entry with a specified year of experience.
 *
 * Navigates to the Skills section, selects a skill, fills in the year, saves it, and  updated list.
 *
 * @param year - The year of experience to be added.
 */

  async addSkills(year : number){
  }


/**
 * Edits the first skill entry with the provided year.
 *
 * Navigates to the Skills section, edits the year of an existing skill, saves it, and  updated list.
 *
 * @param year - The new year value to update in the skill record.
 */

  async editSkills(year : number){
  }

  /**
 * Adds a new language qualification entry with a comment.
 *
 * Navigates to the Language tab, selects options, fills the comment, and saves.
 *
 * @param comment - Unique comment to identify the new language entry.
 */


  async addLanguage(comment: string){
  }

  /**
 * Adds and deletes a language entry based on the provided comment.
 *
 * Navigates to the Language section, adds a new record, deletes it, and
 *  the updated comment list.
 *
 * @param editComment - The unique comment used to identify and delete the language entry.
 * 
 */


  async deleteLanguage(editComment : string){
  }


}
