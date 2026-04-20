// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { sampleTestContent } from "./template.js";
import { RLCModel } from "../interfaces.js";

export function buildSampleTest(model: RLCModel) {
  return {
    path: "test/public/sampleTest.spec.ts",
    content: hbs.compile(sampleTestContent, { noEscape: true })({
      isEsm: model.options?.moduleKind === "esm",
      isCjs: model.options?.moduleKind === "cjs"
    })
  };
}
