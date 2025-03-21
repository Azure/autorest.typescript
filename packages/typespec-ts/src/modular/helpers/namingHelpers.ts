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
  if (isReservedName(operation.name, NameType.Operation)) {
    return {
      name: `$${operation.name}`,
      fixme: [
        `${operation.name} is a reserved word that cannot be used as an operation name. 
        Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript") 
        to the operation to override the generated name.`
      ]
    };
  }

  return {
    name: normalizeName(operation.name, NameType.Operation, true)
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
