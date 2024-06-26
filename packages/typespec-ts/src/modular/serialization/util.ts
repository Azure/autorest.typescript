import {
  getLibraryName,
  getWireName,
  SdkEnumType,
  SdkModelPropertyType,
  SdkModelType,
  SdkType,
  SdkUnionType,
  UsageFlags as TCGCUsageFlags
} from "@azure-tools/typespec-client-generator-core";
import { UsageFlags } from "@typespec/compiler";
import { toPascalCase } from "../../utils/casingUtils.js";
import { SdkContext } from "../../utils/interfaces.js";

type ModularTypeName = string;
export type SerializeFunctionType = SdkModelType | SdkUnionType | SdkEnumType;
export type SerializerMap = Record<ModularTypeName, SerializerMetadata>;
export type SerializerOutput = string;

interface SerializerMetadata {
  rlcTypeName?: string;
  rlcTypeAlias?: string;
  type: SerializeFunctionType;
  serializerFunctionName?: string;
  deserializerFunctionName?: string;
}

const supportedFormats = ["base64url", "base64", "byte"];
export function getEncodingFormat(
  functionType: UsageFlags,
  type: SdkType & { kind: "bytes" }
) {
  if (functionType === UsageFlags.Output) {
    return type.encode;
  }

  return supportedFormats.find((format) => format === type.encode) ?? "base64";
}

const dispatch: {
  [Kind in SdkType["kind"]]: (
    type: SdkType & { kind: Kind }
  ) => string | undefined;
} = {
  string: (_) => "string",
  boolean: (_) => "boolean",
  bytes: (_) => "Uint8Array",
  model: (type) => type.name,
  union: (type) => type.name,
  enum: (type) => type.name,
  plainDate: (_) => "Date",
  plainTime: (_) => "Date",
  any: (_) => "any",
  numeric: (_) => "number",
  integer: (_) => "number",
  safeint: (_) => "number",
  int8: (_) => "number",
  int16: (_) => "number",
  int32: (_) => "number",
  int64: (_) => "number",
  uint8: (_) => "number",
  uint16: (_) => "number",
  uint32: (_) => "number",
  uint64: (_) => "number",
  float: (_) => "number",
  float32: (_) => "number",
  float64: (_) => "number",
  decimal: (_) => "number",
  decimal128: (_) => "number",
  password: (_) => "string",
  guid: (_) => "string",
  url: (_) => "string",
  uri: (_) => "string",
  ipAddress: (_) => "string",
  uuid: (_) => "string",
  ipV4Address: (_) => "string",
  ipV6Address: (_) => "string",
  eTag: (_) => "string",
  armId: (_) => "string",
  azureLocation: (_) => "string",
  utcDateTime: (_) => "Date",
  offsetDateTime: (_) => "Date",
  duration: (_) => "FIXME",
  array: (type) => {
    const valueTypeId = getModularTypeId(type.valueType);
    return valueTypeId ? `Array<${valueTypeId}>` : undefined;
  },
  tuple: (type) => {
    const elementIds = type.values.map(getModularTypeId);
    if (!type.values.length || elementIds.some((id) => !id)) {
      return;
    }
    return `[${elementIds.join(", ")}]`;
  },
  dict: (type) => {
    const keyId = getModularTypeId(type.keyType);
    const valueId = getModularTypeId(type.valueType);
    if (!keyId || !valueId) {
      return;
    }
    const valueType = valueId;
    return `Record<${keyId}, ${valueType}>`;
  },
  enumvalue: (_) => "FIXME",
  constant: (_) => "FIXME",
  credential: (_) => "FIXME",
  endpoint: (_) => "string",
  nullable: (_) => "null"
};

export function getModularTypeId<T extends SdkType>(
  type: T
): string | undefined {
  const callback = dispatch[type.kind] as (type: T) => string | undefined;
  return callback(type);
}

export function getParameterTypePropertyName(
  dpgContext: SdkContext,
  functionType: UsageFlags,
  p: SdkModelPropertyType
): string {
  return functionType === UsageFlags.Output
    ? getWireName(dpgContext, p.__raw!)
    : getLibraryName(dpgContext, p.__raw!);
}

export function getReturnTypePropertyName(
  dpgContext: SdkContext,
  functionType: UsageFlags,
  p: SdkModelPropertyType
): string {
  return functionType === UsageFlags.Output
    ? getLibraryName(dpgContext, p.__raw!)
    : getWireName(dpgContext, p.__raw!);
}

export function getRLCTypeId(
  dpgContext: SdkContext,
  type: SdkType & { name?: string }
) {
  const modularTypeId = getModularTypeId(type);
  const usage = getUsage(dpgContext, type);
  const useOutputModel =
    usage & UsageFlags.Output && !(usage & UsageFlags.Input);
  return useOutputModel ? toPascalCase(`${modularTypeId} Rest`) : modularTypeId;
}

export function getUsage(
  // @ts-expect-error: To be removed with the below TODO
  dpgContext: SdkContext,
  // @ts-expect-error: Ditto
  type: SdkType
): TCGCUsageFlags {
  return toDpgUsageFlags(
    //TODO: Currently disregards usage when calculating whether or not to emit the function. This
    //doesn't affect client API surface.
    TCGCUsageFlags.Input | TCGCUsageFlags.Output
  );
}

function toDpgUsageFlags(usage: TCGCUsageFlags): UsageFlags {
  return (
    (usage & TCGCUsageFlags.Input ? UsageFlags.Input : 0) |
    (usage & TCGCUsageFlags.Output ? UsageFlags.Output : 0)
  );
}
