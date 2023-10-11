// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";

export function buildApiExtractorConfig(model: RLCModel) {
  let { generateTest } = model.options || {};
  const { packageDetails, isModularLibrary } = model.options || {};
  // Take the undefined as true by default
  generateTest = generateTest === true || generateTest === undefined;
  const project = new Project();
  const config = {
    $schema:
      "https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json",
    mainEntryPointFilePath: `./types${
      generateTest || isModularLibrary ? "/src" : ""
    }/index.d.ts`,
    docModel: {
      enabled: true
    },
    apiReport: {
      enabled: true,
      reportFolder: "./review"
    },
    dtsRollup: {
      enabled: true,
      untrimmedFilePath: "",
      publicTrimmedFilePath: `./types/${
        packageDetails?.nameWithoutScope ?? packageDetails?.name
      }.d.ts`
    },
    messages: {
      tsdocMessageReporting: {
        default: {
          logLevel: "none"
        }
      },
      extractorMessageReporting: {
        "ae-missing-release-tag": {
          logLevel: "none"
        },
        "ae-unresolved-link": {
          logLevel: "none"
        }
      }
    }
  };

  const filePath = "api-extractor.json";
  const configFile = project.createSourceFile(
    filePath,
    JSON.stringify(config),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}
