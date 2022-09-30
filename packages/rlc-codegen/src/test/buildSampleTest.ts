// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { sampleTestContent } from "./template.js";
import { RLCModel } from "../interfaces.js";

export function buildSampleTest(model: RLCModel) {
  const generateTest = Boolean(model.options?.generateTest);
  if (!generateTest) {
    return;
  }
  return {
    path: "test/public/sampleTest.spec.ts",
    content: hbs.compile(sampleTestContent, { noEscape: true })({})
  };
}
