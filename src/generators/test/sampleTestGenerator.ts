import { Project } from "ts-morph";
import * as path from 'path';
import * as fs from 'fs';
import * as hbs from "handlebars";
import { getAutorestOptions } from "../../autorestSession";

export function generateSampleTestFile(
    project: Project
  ) {
    const { generateTest } = getAutorestOptions();
    if (!generateTest) {
      return;
    }
    const metadata = {}
    const file = fs.readFileSync(path.join(__dirname, "sampleTest.spec.ts.hbs"), {
      encoding: "utf-8"
    });
    const sampleTestFileContents = hbs.compile(file, { noEscape: true });
    project.createSourceFile("test/public/sampleTest.spec.ts", sampleTestFileContents(metadata), {
      overwrite: true
    });
  }
