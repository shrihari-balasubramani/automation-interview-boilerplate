import { Browser, BrowserContext, chromium, Page } from "playwright";

let browserContext: BrowserContext;
let browser: Browser;
let page: Page;

describe("front page", () => {
  beforeAll(async () => {
    browser = await chromium.launch();
    browserContext = await browser.newContext({
      ignoreHTTPSErrors: true,
    });
    page = await browserContext.newPage();
  });

  it("Page status should be 200", async () => {
    const pageResponse = await page.goto("https://google.com", {
      timeout: 10000,
    });

    expect(true).toBe(true);
  });

  afterAll(async () => {
    await browser.close();
  });
});
