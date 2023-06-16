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
import {
  generateRLCSamples,
  hasRLCSamplesGenerated
} from "../generators/samples/rlcSampleGenerator";
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
  buildLogger
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

  // first store commonly calculated information in CodeModel
  performCodeModelMutations(model);

  // then transform CodeModel to RLCModel
  const rlcModels = transform(model);

  // buildReadmeFile
  generateFileByBuilder(project, buildReadmeFile, rlcModels, srcPath);
  // buildLicenseFile
  generateFileByBuilder(project, buildLicenseFile, rlcModels, srcPath);
  // buildApiExtractorConfig
  generateFileByBuilder(project, buildApiExtractorConfig, rlcModels, srcPath);
  // buildRollupConfig
  generateFileByBuilder(project, buildRollupConfig, rlcModels, srcPath);
  // buildEsLintConfig
  generateFileByBuilder(project, buildEsLintConfig, rlcModels, srcPath);
  // buildKarmaConfigFile
  generateFileByBuilder(project, buildKarmaConfigFile, rlcModels, srcPath);
  // buildEnvFile
  generateFileByBuilder(project, buildEnvFile, rlcModels, srcPath);
  // buildEnvBrowserFile
  generateFileByBuilder(project, buildEnvBrowserFile, rlcModels, srcPath);
  // buildRecordedClientFile
  generateFileByBuilder(project, buildRecordedClientFile, rlcModels, srcPath);
  // buildSampleTest
  generateFileByBuilder(project, buildSampleTest, rlcModels, srcPath);

  // buildResponseTypes
  generateFileByBuilder(project, buildResponseTypes, rlcModels, srcPath);
  // generate input & output models
  generateSchemaTypes(project, rlcModels, srcPath);
  // buildParameterTypes
  generateFileByBuilder(project, buildParameterTypes, rlcModels, srcPath);
  // buildClientDefinitions
  generateFileByBuilder(project, buildClientDefinitions, rlcModels, srcPath);
  // buildClient
  generateFileByBuilder(project, buildClient, rlcModels, srcPath);
  // buildIndexFile
  generateFileByBuilder(project, buildIndexFile, rlcModels, srcPath);
  // buildIsUnexpectedHelper
  generateFileByBuilder(project, buildIsUnexpectedHelper, rlcModels, srcPath);
  // buildPaginateHelper
  generateFileByBuilder(project, buildPaginateHelper, rlcModels, srcPath);
  // buildPollingHelper
  generateFileByBuilder(project, buildPollingHelper, rlcModels, srcPath);
  // buildSerializeHelper
  generateFileByBuilder(project, buildSerializeHelper, rlcModels, srcPath);
  generateFileByBuilder(project, buildLogger, rlcModels, srcPath);
  generateTopLevelIndexFile(rlcModels, project);
  if (generateSample && generateMetadata) {
    generateRLCSamples(model, project);
  }
  if (
    ((generateSample && hasRLCSamplesGenerated) || generateTest) &&
    generateMetadata
  ) {
    generateSampleEnv(project);
  }

  // buildPackageFile
  generateFileByBuilder(
    project,
    buildPackageFile,
    rlcModels,
    srcPath,
    hasRLCSamplesGenerated
  );
  // buildTsConfig
  generateFileByBuilder(
    project,
    buildTsConfig,
    rlcModels,
    srcPath,
    hasRLCSamplesGenerated
  );

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
