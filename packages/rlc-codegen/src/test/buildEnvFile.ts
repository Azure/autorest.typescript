import * as hbs from "handlebars";
import { envContent } from "./envContent.js";
import { RLCModel } from "../interfaces.js";

export function buildEnvFile(model: RLCModel) {
  const generateTest = Boolean(model.options?.generateTest);
  if (!generateTest) {
    return;
  }
  return {
    path: "test/public/utils/env.ts",
    content: hbs.compile(envContent, { noEscape: true })({})
  };
}

export function buildEnvBrowserFile(model: RLCModel) {
  const generateTest = Boolean(model.options?.generateTest);
  if (!generateTest) {
    return;
  }
  return {
    path: "test/public/utils/env.browser.ts",
    content: hbs.compile("", { noEscape: true })({})
  };
}
