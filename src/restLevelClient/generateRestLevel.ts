import { getAutorestOptions, getHost, getSession } from "../autorestSession";
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
import { generatePathFirstClient } from "./generateClientDefinition";
import { generateClient } from "./generateClient";
import { generateIndexFile } from "../generators/indexGenerator";
import { generatePagingHelper } from "./generatePagingHelper";
import { generatePollingHelper } from "./generatePollingHelper";
import { generateTopLevelIndexFile } from "./generateTopLevelIndexFile";
import { hasPagingOperations } from "../utils/extractPaginationDetails";
import { hasPollingOperations } from "./helpers/hasPollingOperations";
import { generateKarmaConfigFile } from "../generators/static/karmaConfigFileGenerator";
import { generateEnvFile } from "../generators/test/envFileGenerator";
import { generateEnvBrowserFile } from "../generators/test/envBrowserFileGenerator";
import { generateRecordedClientFile } from "../generators/test/recordedClientFileGenerator";
import { generateSampleTestFile } from "../generators/test/sampleTestGenerator";
import { generateEsLintConfig } from "../generators/static/esLintConfigGenerator";
import { generateRollupConfig } from "../generators/static/rollupConfigFileGenerator";
import { generateReadmeFile } from "../generators/static/readmeFileGenerator";
import * as path from "path";
import * as fsextra from "fs-extra";
import { generateSampleEnv } from "../generators/samples/sampleEnvGenerator";
import { generateRLCSamples, hasRLCSamplesGenerated } from "../generators/samples/rlcSampleGenerator";
import { generateIsUnexpectedHelper } from "./generateIsUnexpectedHelper";

/**
 * Generates a Rest Level Client library
 */
export async function generateRestLevelClient() {
  const host = getHost();
  const { model } = getSession();
  const {
    outputPath,
    srcPath,
    generateSample,
    generateTest,
    generateMetadata
  } = getAutorestOptions();

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
  generateReadmeFile(model, project);
  generateLicenseFile(project);
  generateApiExtractorConfig(project);
  generateRollupConfig(project);
  generateEsLintConfig(project);

  generateKarmaConfigFile(project);
  generateEnvFile(project);
  generateEnvBrowserFile(project);
  generateRecordedClientFile(project);
  generateSampleTestFile(project);

  generateResponseInterfaces(model, project);
  generateSchemaTypes(model, project);
  generateParameterInterfaces(model, project);
  generatePathFirstClient(model, project);
  generateClient(model, project);
  generateIndexFile(project);
  generateIsUnexpectedHelper(project);
  generateTopLevelIndexFile(model, project);
  if (generateSample && generateMetadata) {
    generateRLCSamples(model, project);
  }
  if (((generateSample && hasRLCSamplesGenerated) || generateTest) && generateMetadata) {
    generateSampleEnv(project);
  }

  generatePackageJson(project);
  generateTsConfig(project);

  // Save the source files to the virtual filesystem
  project.saveSync();
  const fs = project.getFileSystem();
  const pathToClear = outputPath ? path.join(outputPath, srcPath) : srcPath;
  fsextra.emptyDirSync(`${pathToClear}`);

  // Loop over the files
  for (const file of project.getSourceFiles()) {
    const filePath = file.getFilePath();
    const isJson = /\.json$/gi.test(filePath);
    const isSourceCode = /\.(ts|js)$/gi.test(filePath);
    let fileContents = fs.readFileSync(filePath);
    const licenseHeader = `// Copyright (c) Microsoft Corporation.\n// Licensed under the MIT license.\n`;

    if (isSourceCode) {
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
