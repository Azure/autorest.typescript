import { ImportType } from "@azure-tools/rlc-common";
import { UsageFlags } from "@typespec/compiler";
import { toPascalCase } from "../../utils/casingUtils.js";
import {
  isSpecialHandledUnion,
  isSpecialUnionVariant
} from "../buildSerializeUtils.js";
import { Property, Type } from "../modularCodeModel.js";

export type Imports = Array<{
  importType: ImportType | "serializers";
  name: string;
}>;
export type ModularTypeName = string;
export type SerializerMap = Record<ModularTypeName, SerializerMetadata>;
export interface SerializerMetadata {
  rlcTypeName: string;
  rlcTypeAlias: string;
  type: Type;
  serializerFunctionName?: string;
  deserializerFunctionName?: string;
}
export type SerializerOutput = { expr: string; imports?: Imports };

export function getAllNamedAncestors(t: Type): Type[] {
  const map = new Map<string, Type>();
  const stack: Type[] = [t];
  while (stack.length) {
    const type = stack.pop()!;
    if (type.name && !map.has(type.name)) {
      map.set(type.name, type);
      stack.push(...(t.parents ?? []));
    }
  }
  return Array.from(map.values());
}

export function getEncodingFormat(type: { format?: string }) {
  const supportedFormats = ["base64url", "base64", "byte"];

  if (!supportedFormats.includes(type.format ?? "")) {
    return "base64";
  }

  return type.format;
}

export function getModularTypeId(type: Type) {
  return type.alias ?? type.name;
}

export function getParameterTypePropertyName(
  functionType: UsageFlags,
  p: Property
): string {
  return functionType === UsageFlags.Output ? p.restApiName : p.clientName;
}

export function getReturnTypePropertyName(
  functionType: UsageFlags,
  p: Property
): string {
  return functionType === UsageFlags.Input ? p.restApiName : p.clientName;
}

export function getRLCTypeId(type: Type) {
  const modularTypeId = getModularTypeId(type);
  const useOutputModel =
    type.usage &&
    type.usage & UsageFlags.Output &&
    !(type.usage & UsageFlags.Input);
  return useOutputModel ? toPascalCase(`Rest ${modularTypeId}`) : modularTypeId;
}

export function hasSerializeFunction(type: Type) {
  return Boolean(
    (type.type === "model" && type.name) || isSpecialHandledUnion(type)
  );
}

export function isNormalUnion(t: Type): boolean {
  return (
    t.type === "combined" &&
    !(
      t.types?.some((v) => {
        return isSpecialUnionVariant(v);
      }) ?? false
    )
  );
}
