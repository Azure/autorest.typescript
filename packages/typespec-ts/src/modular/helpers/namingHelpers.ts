import {
  NameType,
  normalizeName,
  ReservedModelNames
} from "@azure-tools/rlc-common";
import {
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { ServiceOperation } from "../../utils/operationUtil.js";

export function getClientName(
  client: SdkClientType<SdkServiceOperation>
): string {
  return client.name.replace(/Client$/, "");
}

export function getClassicalClientName(
  client: SdkClientType<SdkServiceOperation>
): string {
  return client.name;
}

export interface GuardedName {
  name: string;
  fixme?: string[];
}

export function getOperationName(operation: ServiceOperation): GuardedName {
  const norm = normalizeName(operation.name, NameType.Method, true);
  if (isReservedName(operation.name, NameType.Method)) {
    return {
      name: norm,
      fixme: [
        `${operation.name} is a reserved word that cannot be used as an operation name. 
        Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript") 
        to the operation to override the generated name.`
      ]
    };
  }
  return {
    name: norm
  };
}

export function isReservedName(name: string, nameType: NameType): boolean {
  return ReservedModelNames.some(
    (reservedName) =>
      reservedName.name === name.toLowerCase() &&
      reservedName.reservedFor.includes(nameType)
  );
}

export function getClassicalLayerPrefix(
  prefixes: string[],
  nameType: NameType,
  separator: string = "",
  layer: number = prefixes.length - 1
): string {
  const prefix: string[] = [];
  if (layer < 0) {
    return prefix.join(separator);
  }
  if (layer === 0) {
    return normalizeName(prefixes[0] ?? "", nameType);
  }
  for (let i = 0; i <= layer; i++) {
    prefix.push(normalizeName(prefixes[i] ?? "", nameType));
  }
  return prefix.join(separator);
}

export function isDefined<T>(thing: T | undefined | null): thing is T {
  return typeof thing !== "undefined" && thing !== null;
}

/**
 * Generates a locally unique name within a set of existing names.
 * @param name - The base name.
 * @param existingNames - A set of names already in use.
 * @returns A unique name not present in the existing names set.
 */
export function generateLocallyUniqueName(
  name: string,
  existingNames: Set<string>
): string {
  let uniqueName = name;
  let counter = 1;
  while (existingNames.has(uniqueName)) {
    uniqueName = `${name}_${counter}`;
    counter++;
  }
  return uniqueName;
}
