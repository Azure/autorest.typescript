// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import { writeFile } from "fs/promises";
import { join as pathJoin } from "path";

export async function generateCrossLanguageDefinitionFile(
  outputDir: string,
  dpgContext: SdkContext
) {
  const CrossLanguageDefinitionId: Record<string, string> = {};

  for (const model of dpgContext.sdkPackage.models) {
    CrossLanguageDefinitionId[`${model.name}:interface`] =
      model.crossLanguageDefinitionId;
  }
  for (const enm of dpgContext.sdkPackage.enums) {
    CrossLanguageDefinitionId[`Known${enm.name}:enum`] =
      enm.crossLanguageDefinitionId;
  }
  for (const union of dpgContext.sdkPackage.unions) {
    CrossLanguageDefinitionId[`${union.name}:type`] =
      union.crossLanguageDefinitionId;
  }

  // TODO: operation groups and operations

  const json = {
    CrossLanguagePackageId: dpgContext.sdkPackage.crossLanguagePackageId,
    CrossLanguageDefinitionId
  };

  await writeFile(
    pathJoin(outputDir, "apiview-properties.json"),
    JSON.stringify(json)
  );
}
