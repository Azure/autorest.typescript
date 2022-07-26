import * as fs from 'fs';
import * as path from 'path';
import * as hbs from 'handlebars';
import { Project } from 'ts-morph';

export function generateSampleEnv(project: Project) {
    const file = fs.readFileSync(path.join(__dirname, "sampleEnv.hbs"), {
        encoding: "utf-8"
    });
    const readmeFileContents = hbs.compile(file, { noEscape: true });
    project.createSourceFile("sample.env", readmeFileContents({}), {
        overwrite: true
    });
}