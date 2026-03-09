import {
  SdkClientType,
  SdkEnumType,
  SdkModelType,
  SdkType,
  SdkServiceOperation,
  UsageFlags
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "../../utils/interfaces.js";
import {
  getMethodHierarchiesMap,
  ServiceOperation
} from "../../utils/operationUtil.js";
import { getExternalModel } from "../type-expressions/get-model-expression.js";

export interface PreviewClassification {
  previewMethods: Map<string, ServiceOperation[]>;
  stableMethods: Map<string, ServiceOperation[]>;
  previewOnlyGroups: Set<string>;
  mixedGroups: Set<string>;
  previewTypes: Set<SdkType>;
  stableTypes: Set<SdkType>;
  previewModels: Set<SdkModelType>;
  previewEnums: Set<SdkEnumType>;
  hasAnyPreview: boolean;
}

function getApiVersions(apiVersions: unknown): string[] {
  if (!apiVersions) {
    return [];
  }
  if (typeof apiVersions === "string") {
    return [apiVersions];
  }
  if (Array.isArray(apiVersions)) {
    return apiVersions.filter((version) => typeof version === "string");
  }
  if (apiVersions instanceof Map) {
    return Array.from(apiVersions.keys());
  }
  if (apiVersions instanceof Set) {
    return Array.from(apiVersions.values()).filter(
      (version) => typeof version === "string"
    );
  }
  if (typeof apiVersions === "object") {
    return Object.keys(apiVersions as Record<string, unknown>);
  }
  return [];
}

function getPackageApiVersions(context: SdkContext): string[] {
  // Use the API version enum from the SDK package for accurate version list
  const apiVersionEnum = context.sdkPackage.enums.find(
    (e) => e.usage === UsageFlags.ApiVersionEnum
  );
  if (apiVersionEnum) {
    return apiVersionEnum.values
      .map((v) => String(v.value))
      .filter((v) => v.length > 0);
  }
  // Fallback: extract values from metadata.apiVersions Map
  const raw = context.sdkPackage.metadata.apiVersions;
  if (raw instanceof Map) {
    return Array.from(raw.values()).filter(
      (v): v is string => typeof v === "string"
    );
  }
  return getApiVersions(raw);
}

/**
 * Returns the latest API version string that does NOT match the preview regex.
 * Assumes versions are ordered chronologically in the TypeSpec enum.
 */
export function getLatestStableApiVersion(
  context: SdkContext
): string | undefined {
  const previewRegex = context.previewStringRegex ?? /preview|beta/i;
  const versions = getPackageApiVersions(context);
  const stableVersions = versions.filter((v) => !previewRegex.test(v));
  return stableVersions.length > 0
    ? stableVersions[stableVersions.length - 1]
    : undefined;
}

/**
 * Returns the latest API version string that DOES match the preview regex.
 * Assumes versions are ordered chronologically in the TypeSpec enum.
 */
export function getLatestPreviewApiVersion(
  context: SdkContext
): string | undefined {
  const previewRegex = context.previewStringRegex ?? /preview|beta/i;
  const versions = getPackageApiVersions(context);
  const previewVersions = versions.filter((v) => previewRegex.test(v));
  return previewVersions.length > 0
    ? previewVersions[previewVersions.length - 1]
    : undefined;
}

function isPreviewOperation(
  previewRegex: RegExp,
  apiVersions: string[]
): boolean {
  if (apiVersions.length === 0) {
    return false;
  }
  return apiVersions.every((version) => previewRegex.test(version));
}

export function classifyPreviewFeatures(
  context: SdkContext,
  client: SdkClientType<SdkServiceOperation>
): PreviewClassification {
  const previewRegex = context.previewStringRegex ?? /preview|beta/i;
  const packageApiVersions = getPackageApiVersions(context);
  const hasStablePackageVersion = packageApiVersions.some(
    (version) => !previewRegex.test(version)
  );
  const methodMap = getMethodHierarchiesMap(context, client);
  const previewMethods = new Map<string, ServiceOperation[]>();
  const stableMethods = new Map<string, ServiceOperation[]>();
  const previewOnlyGroups = new Set<string>();
  const mixedGroups = new Set<string>();
  let hasPreviewMethods = false;

  for (const [groupKey, operations] of methodMap) {
    const previewOps: ServiceOperation[] = [];
    const stableOps: ServiceOperation[] = [];
    for (const operation of operations) {
      if (!hasStablePackageVersion) {
        stableOps.push(operation);
        continue;
      }
      const operationApiVersions = getApiVersions(operation.apiVersions);
      if (isPreviewOperation(previewRegex, operationApiVersions)) {
        previewOps.push(operation);
      } else {
        stableOps.push(operation);
      }
    }

    if (previewOps.length > 0) {
      previewMethods.set(groupKey, previewOps);
      hasPreviewMethods = true;
    }
    if (stableOps.length > 0) {
      stableMethods.set(groupKey, stableOps);
    }
    if (previewOps.length > 0 && stableOps.length > 0) {
      mixedGroups.add(groupKey);
    } else if (previewOps.length > 0) {
      previewOnlyGroups.add(groupKey);
    }
  }

  const hasAnyPreview = hasStablePackageVersion && hasPreviewMethods;
  if (!hasAnyPreview) {
    const stableTypes = collectTypesForOperations(
      context,
      Array.from(methodMap.values()).flat()
    );
    return {
      previewMethods: new Map(),
      stableMethods: new Map(methodMap),
      previewOnlyGroups: new Set(),
      mixedGroups: new Set(),
      previewTypes: new Set(),
      stableTypes,
      previewModels: new Set(),
      previewEnums: new Set(),
      hasAnyPreview: false
    };
  }

  const previewTypes = collectTypesForOperations(
    context,
    Array.from(previewMethods.values()).flat()
  );
  const stableTypes = collectTypesForOperations(
    context,
    Array.from(stableMethods.values()).flat()
  );
  const previewOnlyTypes = new Set(
    [...previewTypes].filter((type) => !stableTypes.has(type))
  );
  const previewModels = new Set<SdkModelType>(
    [...previewOnlyTypes].filter(
      (type) => type.kind === "model"
    ) as SdkModelType[]
  );
  const previewEnums = new Set<SdkEnumType>(
    [...previewOnlyTypes].filter(
      (type) => type.kind === "enum"
    ) as SdkEnumType[]
  );

  return {
    previewMethods,
    stableMethods,
    previewOnlyGroups,
    mixedGroups,
    previewTypes,
    stableTypes,
    previewModels,
    previewEnums,
    hasAnyPreview
  };
}

export function getPreviewOnlyTopLevelGroups(
  previewInfo: PreviewClassification
): Set<string> {
  const previewTopLevelGroups = new Set<string>();
  const stableTopLevelGroups = new Set<string>();
  for (const groupKey of previewInfo.previewMethods.keys()) {
    const [topLevel] = groupKey.split("/");
    if (topLevel) {
      previewTopLevelGroups.add(topLevel);
    }
  }
  for (const groupKey of previewInfo.stableMethods.keys()) {
    const [topLevel] = groupKey.split("/");
    if (topLevel) {
      stableTopLevelGroups.add(topLevel);
    }
  }
  for (const stableGroup of stableTopLevelGroups) {
    previewTopLevelGroups.delete(stableGroup);
  }
  return previewTopLevelGroups;
}

function collectTypesForOperations(
  context: SdkContext,
  operations: ServiceOperation[]
): Set<SdkType> {
  const types = new Set<SdkType>();
  for (const operation of operations) {
    visitMethod(context, operation, types);
    visitOperation(context, operation, types);
  }
  return types;
}

function visitOperation(
  context: SdkContext,
  operation: ServiceOperation,
  types: Set<SdkType>
) {
  visitType(context, operation.operation.bodyParam?.type, types);
  operation.operation.exceptions.forEach((exception) =>
    visitType(context, exception.type, types)
  );
  operation.operation.parameters.forEach((parameter) =>
    visitType(context, parameter.type, types)
  );
  operation.operation.responses.forEach((response) =>
    visitType(context, response.type, types)
  );
}

function visitMethod(
  context: SdkContext,
  operation: ServiceOperation,
  types: Set<SdkType>
) {
  operation.parameters.forEach((parameter) =>
    visitType(context, parameter.type, types)
  );
  visitType(context, operation.response.type, types);
}

function visitType(
  context: SdkContext,
  type: SdkType | undefined,
  types: Set<SdkType>
) {
  if (!type || types.has(type)) {
    return;
  }
  types.add(type);
  if (type.kind === "model") {
    const externalModel = getExternalModel(type);
    if (externalModel) {
      return;
    }
    if (type.additionalProperties) {
      visitType(context, type.additionalProperties, types);
    }
    for (const property of type.properties) {
      visitType(context, property.type, types);
    }
    if (type.discriminatedSubtypes) {
      for (const subType of Object.values(type.discriminatedSubtypes)) {
        visitType(context, subType, types);
      }
    }
  }
  if (type.kind === "array") {
    visitType(context, type.valueType, types);
  }
  if (type.kind === "dict") {
    visitType(context, type.valueType, types);
  }
  if (type.kind === "union") {
    for (const value of type.variantTypes) {
      visitType(context, value, types);
    }
  }
  if (type.kind === "nullable") {
    visitType(context, type.type, types);
  }
}
