// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

export function generateApiExtractorConfig(project: Project) {
  const { generateMetadata, packageDetails, generateTest, restLevelClient } = getAutorestOptions();

  if (!generateMetadata) {
    return;
  }

  const config = {
    $schema:
      "https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json",
    mainEntryPointFilePath: `${restLevelClient ? "./types" : "./dist-esm"}${generateTest ? "/src" : ""}/index.d.ts`,
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
      publicTrimmedFilePath: `./types/${packageDetails.nameWithoutScope}.d.ts`
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

  project.createSourceFile("api-extractor.json", JSON.stringify(config), {
    overwrite: true
  });
}
