// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getAutorestOptions, getHost, getSession } from "../autorestSession";
import { Project, IndentationText } from "ts-morph";
import { generateLicenseFile } from "../generators/static/licenseFileGenerator";
import { performCodeModelMutations } from "./mutateCodeModel";
import { format } from "prettier";
import { prettierJSONOptions, prettierTypeScriptOptions } from "./config";
import { generateRecordedClientFile } from "../generators/test/recordedClientFileGenerator";
import { generateSampleTestFile } from "../generators/test/sampleTestGenerator";
import { generateReadmeFile } from "../generators/static/readmeFileGenerator";
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
  buildEnvBrowserFile
} from "@azure-tools/rlc-codegen";
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

  generateReadmeFile(model, project);
  generateLicenseFile(project);
  // buildApiExtractorConfig
  generateFileByBuilder(project, buildApiExtractorConfig, rlcModels);
  // buildRollupConfig
  generateFileByBuilder(project, buildRollupConfig, rlcModels);
  // buildEsLintConfig
  generateFileByBuilder(project, buildEsLintConfig, rlcModels);
  // buildKarmaConfigFile
  generateFileByBuilder(project, buildKarmaConfigFile, rlcModels);
  // buildEnvFile
  generateFileByBuilder(project, buildEnvFile, rlcModels);
  // buildEnvBrowserFile
  generateFileByBuilder(project, buildEnvBrowserFile, rlcModels);
  // buildRecordedClientFile
  generateFileByBuilder(project, buildRecordedClientFile, rlcModels);
  generateSampleTestFile(project);

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
    hasRLCSamplesGenerated
  );
  // buildTsConfig
  generateFileByBuilder(
    project,
    buildTsConfig,
    rlcModels,
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
