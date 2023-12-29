// @ts-check
const { test, expect } = require("@playwright/test");

test("home page", async ({ page }) => {
  await page.goto("http://localhost:3000");
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot("home.png");
});
