import { test } from '@playwright/test';
import { sauceDemo_impl } from '../implementation/impl.js';

test.describe("SauceLabs", () => {

    test.beforeEach(async ({ page }) => {

        const call = new sauceDemo_impl(page);
        await call.LaunchURL();


    })

    test("Login @E2E", async ({ page }) => {
        const call = new sauceDemo_impl(page);
        await call.Login();


    })

})