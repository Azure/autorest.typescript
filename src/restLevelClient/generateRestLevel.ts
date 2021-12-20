import { getHost, getSession } from "../autorestSession";
import { Project, IndentationText } from "ts-morph";
import { generatePackageJson } from "../generators/static/packageFileGenerator";
import { generateLicenseFile } from "../generators/static/licenseFileGenerator";
import { generateTsConfig } from "../generators/static/tsConfigFileGenerator";
import { generateApiExtractorConfig } from "../generators/static/apiExtractorConfig";
import { generateResponseInterfaces } from "./generateResponseTypes";
import { performCodeModelMutations } from "./mutateCodeModel";
import { generateSchemaTypes } from "./generateSchemaTypes";
import { format } from "prettier";
import { prettierJSONOptions, prettierTypeScriptOptions } from "./config";
import { generateParameterInterfaces } from "./generateParameterTypes";
import { generatePathFirstClient } from "./generateClient";
import { generateIndexFile } from "../generators/indexGenerator";
import { generatePagingHelper } from "./generatePagingHelper";
import { generatePollingHelper } from "./generatePollingHelper";
import { hasPagingOperations } from "../utils/extractPaginationDetails";
import { hasPollingOperations } from "./helpers/hasPollingOperations";
import { generateKarmaConfigFile } from "../generators/static/karmaConfigFileGenerator";
import { generateEnvFile } from "../generators/test/envFileGenerator";
import { generateEnvBrowserFile } from "../generators/test/envBrowserFileGenerator";
import { generateRecordedClientFile } from "../generators/test/recordedClientFileGenerator";
import { generateSampleTestFile } from "../generators/test/sampleTestGenerator";
/**
 * Generates a Rest Level Client library
 */
export async function generateRestLevelClient() {
  const host = getHost();
  const { model } = getSession();

  const project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces
    }
  });

  if (hasPagingOperations(model)) {
    generatePagingHelper(project);
  }

  if (hasPollingOperations(model)) {
    generatePollingHelper(project);
  }

  performCodeModelMutations(model);
  generatePackageJson(project);
  generateLicenseFile(project);
  generateTsConfig(project);
  generateApiExtractorConfig(project);

  generateKarmaConfigFile(project)
  generateEnvFile(project);
  generateEnvBrowserFile(project);
  generateRecordedClientFile(project);
  generateSampleTestFile(project);

  generateResponseInterfaces(model, project);
  generateSchemaTypes(model, project);
  generateParameterInterfaces(model, project);
  generatePathFirstClient(model, project);
  generateIndexFile(project);

  // Save the source files to the virtual filesystem
  project.saveSync();
  const fs = project.getFileSystem();

  // Loop over the files
  for (const file of project.getSourceFiles()) {
    const filePath = file.getFilePath();
    const isJson = /\.json$/gi.test(filePath);
    const isSourceCode = /\.(ts|js)$/gi.test(filePath);
    let fileContents = fs.readFileSync(filePath);
    const licenseHeader = `// Copyright (c) Microsoft Corporation.\n// Licensed under the MIT license.\n`;

    if (!isJson) {
      fileContents = `${licenseHeader.trimLeft()}\n${fileContents}`;
    }

    // Format the contents if necessary
    if (isJson || isSourceCode) {
      fileContents = format(
        fileContents,
        isJson ? prettierJSONOptions : prettierTypeScriptOptions
      );
    }

    // Write the file to the AutoRest host
    host.writeFile({
      filename: filePath.substr(1), // Get rid of the leading slash '/'
      content: fileContents
    });
  }
}
