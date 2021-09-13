import { readFileSync } from "fs";
import { getSession } from "../autorestSession";
import { extractPaginationDetails } from "../utils/extractPaginationDetails";
import * as path from "path";
import * as hbs from "handlebars";
import { Project } from "ts-morph";

export function generatePollingHelper(project: Project) {
  let file: string = "";

  file = readFileSync(path.join(__dirname, "pollingHelper.ts.hbs"), {
    encoding: "utf-8"
  });

  const readmeFileContents = hbs.compile(file, { noEscape: true });
  project.createSourceFile("src/pollingHelper.ts", readmeFileContents({}), {
    overwrite: true
  });
}
