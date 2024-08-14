// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { RLCModel } from "../interfaces.js";
import { recordedClientContent } from "./template.js";

export function buildRecordedClientFile(model: RLCModel) {
  const recordedClientFileContents = hbs.compile(recordedClientContent, {
    noEscape: true
  });
  return {
    path: "test/public/utils/recordedClient.ts",
    content: recordedClientFileContents({
      isEsm: model.options?.moduleKind === "esm",
      isCjs: model.options?.moduleKind === "cjs"
    })
  };
}
