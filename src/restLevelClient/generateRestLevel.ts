import { getHost } from "../autorestSession";
import { Project, IndentationText } from "ts-morph";
import { generatePackageJson } from "../generators/static/packageFileGenerator";
import { generateLicenseFile } from "../generators/static/licenseFileGenerator";
import { generateTsConfig } from "../generators/static/tsConfigFileGenerator";
import { generateApiExtractorConfig } from "../generators/static/apiExtractorConfig";
import { format } from "prettier";
import { prettierJSONOptions, prettierTypeScriptOptions } from "./config";

/**
 * Generates a Rest Level Client library
 */
export async function generateRestLevelClient() {
  const host = getHost();

  const project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces
    }
  });

  generatePackageJson(project);
  generateLicenseFile(project);
  generateTsConfig(project);
  generateApiExtractorConfig(project);

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
    host.WriteFile(
      filePath.substr(1), // Get rid of the leading slash '/'
      fileContents
    );
  }
}
