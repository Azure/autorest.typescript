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
  buildEnvFile,
  buildEnvBrowserFile,
  buildRecordedClientFile,
  buildSampleTest,
  buildLicenseFile,
  buildReadmeFile,
  buildSerializeHelper,
  buildLogger,
  buildSamples
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
    generateMetadata
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
    // buildEnvFile
    generateFileByBuilder(project, buildEnvFile, rlcModels);
    // buildEnvBrowserFile
    generateFileByBuilder(project, buildEnvBrowserFile, rlcModels);
    // buildRecordedClientFile
    generateFileByBuilder(project, buildRecordedClientFile, rlcModels);
    // buildSampleTest
    generateFileByBuilder(project, buildSampleTest, rlcModels);
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
    const licenseHeader = `// Copyright (c) Microsoft Corporation.\n// Licensed under the MIT license.\n`;

    if (isSourceCode) {
      fileContents = `${licenseHeader.trimStart()}\n${fileContents}`;
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
