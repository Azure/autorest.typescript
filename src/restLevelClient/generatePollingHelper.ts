import { readFileSync } from "fs";
import * as path from "path";
import * as hbs from "handlebars";
import { Project } from "ts-morph";
import { getAutorestOptions } from "../autorestSession";

export function generatePollingHelper(project: Project) {
  let file: string = "";

  file = readFileSync(path.join(__dirname, "pollingHelper.ts.hbs"), {
    encoding: "utf-8"
  });

  const readmeFileContents = hbs.compile(file, { noEscape: true });
  const { srcPath } = getAutorestOptions();
  project.createSourceFile(path.join(srcPath, "pollingHelper.ts"), readmeFileContents({}), {
    overwrite: true
  });
}
