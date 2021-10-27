import * as fs from 'fs';
import * as path from 'path';
import * as hbs from "handlebars";
import { Project } from 'ts-morph'
import { getAutorestOptions } from '../../autorestSession';
import { ClientDetails } from '../../models/clientDetails';

function createSampleReadmeMetadata(clientDetails: ClientDetails) {
    const { azureOutputDirectory,packageDetails } = getAutorestOptions();
    const samples = clientDetails.samples;
    const sampleFiles = [];
    for(const sample of samples) {
        sampleFiles.push({
            fileName: sample.sampleFunctionName,
            description: sample.operationDescription
        })
    }
    const metadata = {
        packageName: packageDetails.name,
        sampleFiles: sampleFiles,
        sampleFileName: sampleFiles[0].fileName,
        azureOutputDirectory: azureOutputDirectory,
    }
    return metadata;
}

export function generateSampleReadme(clientDetails: ClientDetails, project: Project) {
    const metadata = createSampleReadmeMetadata(clientDetails);
    const file = fs.readFileSync(path.join(__dirname, "sampleREADME.md.hbs"), {
        encoding: "utf-8"
    });
    const readmeFileContents = hbs.compile(file, { noEscape: true });
    project.createSourceFile("samples/v1/typescript/README.md", readmeFileContents(metadata), {
        overwrite: true
    });
}