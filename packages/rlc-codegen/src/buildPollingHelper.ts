import { RLCModel } from "./interfaces.js";
import { readFileSync } from "fs";
import * as path from "path";
import * as hbs from "handlebars";
import { hasPollingOperations } from "./helpers/operationHelpers.js";

export function buildPollingHelper(model: RLCModel) {
  if (!hasPollingOperations(model)) {
    return;
  }
  let file: string = readFileSync(
    path.join(path.resolve(), "static", "pollingHelper.ts.hbs"),
    {
      encoding: "utf-8"
    }
  );

  const readmeFileContents = hbs.compile(file, { noEscape: true });
  const { srcPath } = model;
  return {
    path: path.join(srcPath, "pollingHelper.ts"),
    content: readmeFileContents({})
  };
}
