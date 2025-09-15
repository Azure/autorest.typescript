// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getAutorestOptions, getHost, getSession } from "../autorestSession";
import { Project, IndentationText } from "ts-morph";
import { performCodeModelMutations } from "./mutateCodeModel";
import { format } from "prettier";
import { prettierJSONOptions, prettierTypeScriptOptions } from "./config";
import * as path from "path";
import * as fsextra from "fs-extra";
import { generateSampleEnv } from "../generators/samples/sampleEnvGenerator";
import { transform } from "./transforms/transform";
import {
  buildApiExtractorConfig,
  buildClientDefinitions,
  buildIndexFile,
  buildIsUnexpectedHelper,
  buildPackageFile,
  buildParameterTypes,
  buildResponseTypes,
  buildRollupConfig,
  buildTsConfig,
  buildClient,
  buildPaginateHelper,
  buildPollingHelper,
  buildEsLintConfig,
  buildKarmaConfigFile,
  buildRecordedClientFile,
  buildSampleTest,
  buildLicenseFile,
  buildReadmeFile,
  buildSerializeHelper,
  buildLogger,
  buildSamples,
  updatePackageFile,
  buildSnippets,
  buildTsTestBrowserConfig,
  buildTsSrcConfig,
  buildTsSampleConfig,
  buildTsTestConfig
} from "@azure-tools/rlc-common";
import {
  generateFileByBuilder,
  generateSchemaTypes,
  generateTopLevelIndexFile
} from "./helpers/generatorHelpers";

/**
 * Generates a Rest Level Client library
 */
export async function generateRestLevelClient() {
  const host = getHost();
  const { model } = getSession();
  const {
    outputPath,
    srcPath,
    generateTest,
    generateMetadata,
    azureOutputDirectory,
    azureSdkForJs,
    generateSample
  } = getAutorestOptions();

  const project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces
    }
  });

  // first store commonly calculated information in CodeModel
  performCodeModelMutations(model);

  // then transform CodeModel to RLCModel
  const rlcModels = transform(model);
  const hasSampleGenerated = (rlcModels.sampleGroups ?? []).length > 0;

  if (generateMetadata) {
    // buildReadmeFile
    generateFileByBuilder(project, buildReadmeFile, rlcModels);
    // buildLicenseFile
    generateFileByBuilder(project, buildLicenseFile, rlcModels);
    // buildApiExtractorConfig
    generateFileByBuilder(project, buildApiExtractorConfig, rlcModels);
    // buildRollupConfig
    generateFileByBuilder(project, buildRollupConfig, rlcModels);
    // buildEsLintConfig
    generateFileByBuilder(project, buildEsLintConfig, rlcModels);
  }
  if (generateTest) {
    // buildKarmaConfigFile
    generateFileByBuilder(project, buildKarmaConfigFile, rlcModels);
    // buildRecordedClientFile
    generateFileByBuilder(project, buildRecordedClientFile, rlcModels);
    // buildSampleTest
    generateFileByBuilder(project, buildSampleTest, rlcModels);
    // buildSnippets
    generateFileByBuilder(project, buildSnippets, rlcModels);
  }

  // buildResponseTypes
  generateFileByBuilder(project, buildResponseTypes, rlcModels);
  // generate input & output models
  generateSchemaTypes(project, rlcModels);
  // buildParameterTypes
  generateFileByBuilder(project, buildParameterTypes, rlcModels);
  // buildClientDefinitions
  generateFileByBuilder(project, buildClientDefinitions, rlcModels);
  // buildClient
  generateFileByBuilder(project, buildClient, rlcModels);
  // buildIndexFile
  generateFileByBuilder(project, buildIndexFile, rlcModels);
  // buildIsUnexpectedHelper
  generateFileByBuilder(project, buildIsUnexpectedHelper, rlcModels);
  // buildPaginateHelper
  generateFileByBuilder(project, buildPaginateHelper, rlcModels);
  // buildPollingHelper
  generateFileByBuilder(project, buildPollingHelper, rlcModels);
  // buildSerializeHelper
  generateFileByBuilder(project, buildSerializeHelper, rlcModels);
  generateFileByBuilder(project, buildLogger, rlcModels);
  generateTopLevelIndexFile(rlcModels, project);
  if (hasSampleGenerated && generateMetadata) {
    generateFileByBuilder(project, buildSamples, rlcModels);
  }
  if ((hasSampleGenerated || generateTest) && generateMetadata) {
    generateSampleEnv(project);
  }

  if (generateMetadata) {
    // buildPackageFile
    generateFileByBuilder(project, buildPackageFile, rlcModels);
    // buildTsConfig
    generateFileByBuilder(project, buildTsConfig, rlcModels);
    if (azureSdkForJs) {
      // buildTsSrcConfig
      generateFileByBuilder(project, buildTsSrcConfig, rlcModels);
      if (generateSample) {
        // buildTsSampleConfig
        generateFileByBuilder(project, buildTsSampleConfig, rlcModels);
      }
      if (generateTest) {
        // buildTsTestBrowserConfig
        generateFileByBuilder(project, buildTsTestBrowserConfig, rlcModels);
        // buildTstestConfig
        generateFileByBuilder(project, buildTsTestConfig, rlcModels);
      }
    }
  } else {
    // update package.json if existing
    const packageJsonContent = JSON.parse(await host.readFile("package.json"));
    if (packageJsonContent !== undefined && packageJsonContent !== null)
      generateFileByBuilder(
        project,
        (model) => updatePackageFile(model, packageJsonContent),
        rlcModels
      );
  }

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
    const licenseHeaderOnly = `
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
`;

    const licenseHeaderWithCodeGen = `
${licenseHeaderOnly}

// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is regenerated.
`;

    if (isSourceCode) {
      // Check if the file is in the src folder (auto-generated) vs test/sample folders
      const isSrcFile = filePath.includes('/src/') || filePath.includes('\\src\\');
      const licenseHeader = isSrcFile ? licenseHeaderWithCodeGen : licenseHeaderOnly;
      fileContents = `${licenseHeader.trimLeft()}\n${fileContents}`;
    }

    // Format the contents if necessary
    if (isJson || isSourceCode) {
      fileContents = await format(
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
