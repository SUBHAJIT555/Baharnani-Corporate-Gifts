import fs from "fs";
import { chromium } from "playwright-core";

const CHROME_PATH =
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const BASE_URL = "http://localhost:5173";

const ROUTES = [
  "/",
  "/about-us",
  "/services",
  "/features",
  "/education",
  "/contact-us",
];

(async () => {
  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true,
  });

  const page = await browser.newPage();

  if (!fs.existsSync("dist-static")) fs.mkdirSync("dist-static");

  for (const route of ROUTES) {
    await page.goto(BASE_URL + route, { waitUntil: "networkidle" });

    // FULL rendered HTML
    const html = await page.content();

    // Create folder structure
    const folder =
      route === "/" ? "dist-static" : `dist-static${route.replace(/\/$/, "")}`;
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

    // Save HTML file
    fs.writeFileSync(`${folder}/index.html`, html);

    console.log("✔ Static page rendered:", route);
  }

  await browser.close();
})();
