// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { envContent } from "./template.js";
import { RLCModel } from "../interfaces.js";

export function buildEnvFile(model: RLCModel) {
  return {
    path: "test/public/utils/env.ts",
    content: hbs.compile(envContent, { noEscape: true })({})
  };
}

export function buildEnvBrowserFile(model: RLCModel) {
  return {
    path: "test/public/utils/env.browser.ts",
    content: hbs.compile("", { noEscape: true })({})
  };
}
