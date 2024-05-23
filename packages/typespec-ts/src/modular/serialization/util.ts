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

export function getModularTypeId(type: SdkType & { name?: string }) {
  return type.name;
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
