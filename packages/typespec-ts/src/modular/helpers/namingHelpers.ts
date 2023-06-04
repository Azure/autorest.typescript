import { ReservedModelNames } from "@azure-tools/rlc-common";
import { toCamelCase, toPascalCase } from "../../casingUtils.js";
import { Client, Operation } from "../modularCodeModel.js";

export function getClientName(client: Client) {
  return client.name.replace(/Client$/, "");
}

export interface GuardedName {
  name: string;
  fixme?: string[];
}

export function getOperationName(
  operation: Operation,
  options: { casing: "camel" | "pascal" } = { casing: "camel" }
): GuardedName {
  const casingFn = options.casing === "camel" ? toCamelCase : toPascalCase;
  if (isReservedName(operation.name, NameType.Operation)) {
    return {
      name: `${operation.name}Operation`,
      fixme: [
        `${operation.name} is a reserved word that cannot be used as an operation name. Please add @projectedName(
      "javascript", "<JS-Specific-Name>") to the operation to override the generated name.`
      ]
    };
  }

  return {
    name: casingFn(operation.name)
  };
}

export function isReservedName(name: string, nameType: NameType): boolean {
  return ReservedModelNames.some(
    (reservedName) =>
      reservedName.name === name.toLowerCase() &&
      reservedName.reservedFor.includes(nameType)
  );
}

enum NameType {
  Class,
  File,
  Interface,
  Property,
  Parameter,
  Operation,
  OperationGroup
}
