// @ts-check
const { test, expect } = require("@playwright/test");

test("login page", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
    "login.png"
  );
});
