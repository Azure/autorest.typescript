import { Project } from "ts-morph";
import * as path from 'path';
import * as fs from 'fs';
import * as hbs from "handlebars";
import { getAutorestOptions } from "../../autorestSession";

export function generateKarmaConfigFile(project: Project) {
  const { generateTest, restLevelClient } = getAutorestOptions();
  if (!generateTest || !restLevelClient) {
    return;
  }
  const metadata = {}
  const file = fs.readFileSync(path.join(__dirname, "karma.conf.js.hbs"), {
    encoding: "utf-8"
  });
  const karmaConfigFileContents = hbs.compile(file, { noEscape: true });
  project.createSourceFile("karma.conf.js", karmaConfigFileContents(metadata), {
    overwrite: true
  });
}
