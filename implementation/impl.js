import {expect} from '@playwright/test';
import {homePage} from '../pages/home-page.js'

export class sauceDemo_impl {
   
    constructor(page) {

        this.page = page;
        this.element = new homePage(page);
    }

    async LaunchURL () {

        await this.page.goto(this.element.appURL);
        await expect(this.page).toHaveURL(this.element.appURL);
        await expect(this.page).toHaveTitle(this.element.homePageTitle);
    }
    
    async Login () {

        await this.page.getByRole('link', {name : this.element.loginbutton}).click();
        await expect(this.page).toHaveURL(new RegExp(this.element.loginURL));
    }
}