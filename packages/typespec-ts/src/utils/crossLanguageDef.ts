// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SdkContext } from "./interfaces.js";
import { transformModularEmitterOptions } from "../modular/buildModularOptions.js";
import { getMethodHierarchiesMap } from "./operationUtil.js";

export function generateCrossLanguageDefinitionFile(dpgContext: SdkContext): {
  CrossLanguagePackageId: string;
  CrossLanguageDefinitionId: Record<string, string>;
} {
  const modularSourcesRoot =
    dpgContext.generationPathDetail?.modularSourcesDir ?? "src";
  const emitterOptions = transformModularEmitterOptions(
    dpgContext,
    modularSourcesRoot,
    {
      casing: "camel"
    }
  );
  const packageName =
    emitterOptions.options?.packageDetails?.name ?? "package-name";
  const CrossLanguageDefinitionId: Record<string, string> = {};

  for (const model of dpgContext.sdkPackage.models) {
    CrossLanguageDefinitionId[`${packageName}!${model.name}:interface`] =
      model.crossLanguageDefinitionId;
  }
  for (const enm of dpgContext.sdkPackage.enums) {
    CrossLanguageDefinitionId[`${packageName}!Known${enm.name}:enum`] =
      enm.crossLanguageDefinitionId;
  }
  for (const union of dpgContext.sdkPackage.unions) {
    CrossLanguageDefinitionId[`${packageName}!${union.name}:type`] =
      union.crossLanguageDefinitionId;
  }

  for (const subClient of dpgContext.sdkPackage.clients) {
    const clientName =
      emitterOptions.options?.typespecTitleMap?.[subClient.name] ??
      subClient.name;
    const methodMap = getMethodHierarchiesMap(dpgContext, subClient);
    for (const [_prefixKey, operations] of methodMap) {
      for (const operation of operations) {
        const { name } = operation;
        const operationName = `${packageName}!${clientName}#${name}:member(1)`;
        CrossLanguageDefinitionId[operationName] =
          operation.crossLanguageDefinitionId;
      }
    }
  }

  return {
    CrossLanguagePackageId: dpgContext.sdkPackage.crossLanguagePackageId,
    CrossLanguageDefinitionId
  };
}
