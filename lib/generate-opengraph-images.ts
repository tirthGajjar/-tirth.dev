/* eslint-disable no-console */
// https://phiilu.com/generate-open-graph-images-for-your-static-next-js-site
import chromium from "chrome-aws-lambda";
import { createHash } from "crypto";
import fs from "fs";
import playwright from "playwright-core";
import qs from "qs";

type OgImageParams = Record<string, string | undefined>;

const getOgImage = async (params: OgImageParams): Promise<string> => {
  if (process.env.NODE_ENV === "development") {
    return "og image will be generated in production";
  }

  const filteredParams = Object.keys(params).reduce((acc, curr) => {
    if (!params[curr] || params[curr] === "undefined") {
      return acc;
    }
    return {
      ...acc,
      [curr]: params[curr],
    };
  }, {}) as Partial<OgImageParams>;

  const url = `https://og-image-maximeheckel.netlify.app/ogimage?${qs.stringify(
    filteredParams
  )}`;
  const hash = createHash("md5")
    .update(params.title as string)
    .digest("hex");

  const browser = await playwright.chromium.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });
  const ogImageDir = `./public/static/og`;
  const imagePath = `${ogImageDir}/${hash}.png`;
  const publicPath = `/static/og/${hash}.png`;

  try {
    fs.statSync(imagePath);
    return publicPath;
  } catch (error) {
    console.info(`[OG IMAGE]: Generating og image for ${filteredParams.title}`);
    // file does not exists, so we create it
  }

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(url, { waitUntil: "networkidle" });

  const buffer = await page.screenshot({ type: "png" });
  await browser.close();

  fs.mkdirSync(ogImageDir, { recursive: true });
  fs.writeFileSync(imagePath, buffer);

  return publicPath;
};

export default getOgImage;
