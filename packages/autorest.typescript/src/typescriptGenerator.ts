// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as prettier from "prettier";
import * as fsextra from "fs-extra";
import * as path from "path";
import { CodeModel } from "@autorest/codemodel";
import { Project, IndentationText } from "ts-morph";
import { AutorestExtensionHost } from "@autorest/extension-base";
import { transformCodeModel } from "./transforms/transforms";
import { transformSamples } from "./transforms/samplesTransforms";
import { generateClient } from "./generators/clientFileGenerator";
import { generateModels } from "./generators/modelsGenerator";
import { generateMappers } from "./generators/mappersGenerator";
import { generateIndexFile } from "./generators/indexGenerator";
import { generatePackageJson } from "./generators/static/packageFileGenerator";
import { generateApiExtractorConfig } from "./generators/static/apiExtractorConfig";
import { generateLicenseFile } from "./generators/static/licenseFileGenerator";
import { generateReadmeFile } from "./generators/static/readmeFileGenerator";
import { generateSampleTestFile } from "./generators/test/sampleTestGenerator";
import { generateTsConfig, generateTsSampleConfig, generateTsSrcConfig, generateTsTestConfig, generateTsSnippetsConfig } from "./generators/static/tsConfigFileGenerator";
import { generateRollupConfig } from "./generators/static/rollupConfigFileGenerator";
import { generateOperations } from "./generators/operationGenerator";
import { generateOperationsInterfaces } from "./generators/operationInterfaceGenerator";
import { generateSampleEnv } from "./generators/samples/sampleEnvGenerator";
import { generateHLCSamples } from "./generators/samples/hlcSampleGenerator";
import { generateParameters } from "./generators/parametersGenerator";
import { generateLroFiles } from "./generators/LROGenerator";
import { generatePagingFiles } from "./generators/pagingHelperGenerator";
import { generateTracingFile } from "./generators/tracingFileGenerator";
import { getAutorestOptions } from "./autorestSession";
import { conflictResolver } from "./conflictResolver";
import { generateSnippetsFile } from "./generators/test/snippetsGenerator";
import { generateVitestConfig } from "./generators/test/vitestGenerator";
import { generateTsBrowserConfig } from "./generators/static/tsConfigBrowserFileGenerator";

const prettierTypeScriptOptions: prettier.Options = {
  parser: "typescript",
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 80,
  semi: true,
  singleQuote: false,
  tabWidth: 2
};

const prettierJSONOptions: prettier.Options = {
  parser: "json",
  tabWidth: 2,
  semi: false,
  singleQuote: false
};

export async function generateTypeScriptLibrary(
  codeModel: CodeModel,
  host: AutorestExtensionHost
): Promise<void> {
  const project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces
    }
  });

  const {
    licenseHeader: shouldGenerateLicense,
    generateTest,
    generateSample,
    outputPath,
    srcPath,
    generateMetadata,
    azureSdkForJs
  } = getAutorestOptions();

  const clientDetails = await transformCodeModel(codeModel);
  conflictResolver(clientDetails);

  generateModels(clientDetails, project);
  if (generateSample) {
    clientDetails.samples = await transformSamples(codeModel, clientDetails);
  }
  // Skip metadata generation if `generate-metadata` is explicitly false
  generatePackageJson(project, clientDetails);
  generateLicenseFile(project);
  generateReadmeFile(codeModel, project, clientDetails);
  if (generateTest) {
    generateSnippetsFile(codeModel, project, clientDetails);
    generateSampleTestFile(project);
    if (azureSdkForJs) {
      generateVitestConfig(project, "node");
      generateVitestConfig(project, "browser");
      generateVitestConfig(project, "esm");
    }
  }
  generateTsConfig(project);
  if (azureSdkForJs && generateMetadata) {
    generateTsSrcConfig(project);
    if (generateSample) {
      generateTsSampleConfig(project);
    }
    if (generateTest) {
      generateTsSnippetsConfig(project);
      generateTsTestConfig(project);
      generateTsBrowserConfig(project);
    }
  }

  if (!azureSdkForJs) {
    generateRollupConfig(project);
  }

  generateApiExtractorConfig(project);

  generateClient(clientDetails, project);

  generateMappers(clientDetails, project);
  generateOperations(clientDetails, project);
  generateOperationsInterfaces(clientDetails, project);
  const hasSamplesToBeGenerated =
    generateSample &&
    clientDetails?.samples?.length &&
    clientDetails?.samples?.length > 0;
  if ((hasSamplesToBeGenerated || generateTest) && generateMetadata) {
    generateSampleEnv(project);
  }
  if (hasSamplesToBeGenerated) {
    generateHLCSamples(clientDetails, project);
  }
  generateParameters(clientDetails, project);
  generateIndexFile(project, clientDetails);
  await generateLroFiles(clientDetails, project);
  await generatePagingFiles(clientDetails, project);
  generateTracingFile(project);

  const licenseHeader = `
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
`;

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

    // Add the license header to source code files
    if (shouldGenerateLicense && isSourceCode) {
      fileContents = `${licenseHeader.trimLeft()}\n${fileContents}`;
    }

    // Format the contents if necessary
    if (isJson || isSourceCode) {
      fileContents = await prettier.format(
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
