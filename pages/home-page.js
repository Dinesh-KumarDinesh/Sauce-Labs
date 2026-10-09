import { ApplictaionURL, PageTitle, VerifyURL } from '../test-data/testdata.json';
import {homepage} from '../locators/loctaors.json';

export class homePage {

    constructor(page) {


        this.page = page;
        this.appURL = ApplictaionURL.ProdURL;
        this.homePageTitle = PageTitle.HomepageTitle;
        this.loginbutton = homepage.LoginButton;
        this.loginURL = VerifyURL.LoginPageURL;


    }
}