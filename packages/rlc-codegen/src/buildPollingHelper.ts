import { RLCModel } from "./interfaces.js";
import * as path from "path";
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { hasPollingOperations } from "./helpers/operationHelpers.js";
import { pollingContent } from "./static/pollingContent.js";

export function buildPollingHelper(model: RLCModel) {
  if (!hasPollingOperations(model)) {
    return;
  }
  const readmeFileContents = hbs.compile(pollingContent, { noEscape: true });
  const { srcPath } = model;
  return {
    path: path.join(srcPath, "pollingHelper.ts"),
    content: readmeFileContents({})
  };
}
