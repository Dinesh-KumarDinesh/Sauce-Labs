import { test } from '@playwright/test';
import { sauceDemo_impl } from '../implementation/impl.js';

test.describe("SauceLabs", () => {
    
    let call;

    test.beforeEach(async ({ page }) => {

        await test.step("Launching browser", async () => {

            call = new sauceDemo_impl(page);
            await call.LaunchURL();
        });

    })
    test("Login @E2E", async ({ page }) => {

        await test.step("Logging into the sauce labs", async () => {

            await call.Login();
        })
    })

})