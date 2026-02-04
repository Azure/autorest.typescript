// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SdkContext } from "./interfaces.js";
import { transformModularEmitterOptions } from "../modular/buildModularOptions.js";
import { getMethodHierarchiesMap } from "./operationUtil.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { UsageFlags } from "@azure-tools/typespec-client-generator-core";

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
    // Skip api version enum for multi-service scenarios since each service may have different versions
    if (
      dpgContext.rlcOptions?.isMultiService &&
      enm.usage === UsageFlags.ApiVersionEnum
    ) {
      continue;
    }
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
    for (const [prefixKey, operations] of methodMap) {
      const prefixes = prefixKey.split("/");
      if (prefixKey === "") {
        for (const operation of operations) {
          const { name } = operation;
          const operationName = `${packageName}!${clientName}#${name}:member(1)`;
          CrossLanguageDefinitionId[operationName] =
            operation.crossLanguageDefinitionId;
        }
      } else {
        // e,g., @azure/ai-client!ConnectionsOperations#getConnectionWithSecrets:member": "Azure.AI.Projects.Connections.getConnectionWithSecrets"
        const rawGroupName = normalizeName(
          prefixes[0] ?? "",
          NameType.Interface
        );
        const propertyType = `${normalizeName(
          rawGroupName,
          NameType.OperationGroup
        )}Operations`;
        for (const operation of operations) {
          const { name } = operation;
          const operationName = `${packageName}!${propertyType}#${name}:member`;
          CrossLanguageDefinitionId[operationName] =
            operation.crossLanguageDefinitionId;
        }
      }
    }
  }

  return {
    CrossLanguagePackageId: dpgContext.sdkPackage.crossLanguagePackageId,
    CrossLanguageDefinitionId
  };
}
