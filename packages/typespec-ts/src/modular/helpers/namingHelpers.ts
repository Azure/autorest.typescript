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
  return RESERVED_NAMES.some(
    (reservedName) =>
      reservedName.name === name.toLowerCase() &&
      reservedName.reservedFor.includes(nameType)
  );
}

interface ReservedName {
  name: string;
  reservedFor: NameType[];
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

const Newable = [NameType.Class, NameType.Interface, NameType.OperationGroup];

const RESERVED_NAMES: ReservedName[] = [
  { name: "any", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "as", reservedFor: [NameType.Parameter, NameType.Operation] },
  {
    name: "boolean",
    reservedFor: [NameType.Parameter, NameType.Operation, ...Newable]
  },
  { name: "break", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "case", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "catch", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "class", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "const", reservedFor: [NameType.Parameter, NameType.Operation] },
  {
    name: "constructor",
    reservedFor: [NameType.Parameter, NameType.Operation]
  },
  { name: "continue", reservedFor: [NameType.Parameter, NameType.Operation] },
  {
    name: "date",
    reservedFor: [NameType.Parameter, NameType.Operation, ...Newable]
  },
  { name: "debugger", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "declare", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "default", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "delete", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "do", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "else", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "enum", reservedFor: [NameType.Parameter, NameType.Operation] },
  {
    name: "error",
    reservedFor: [NameType.Parameter, NameType.Operation, ...Newable]
  },
  { name: "export", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "extends", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "false", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "finally", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "for", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "from", reservedFor: [NameType.Parameter, NameType.Operation] },
  {
    name: "function",
    reservedFor: [NameType.Parameter, NameType.Operation, ...Newable]
  },
  { name: "get", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "if", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "implements", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "import", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "in", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "instanceof", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "interface", reservedFor: [NameType.Parameter] },
  { name: "let", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "module", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "new", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "null", reservedFor: [NameType.Parameter, NameType.Operation] },
  {
    name: "number",
    reservedFor: [NameType.Parameter, NameType.Operation, ...Newable]
  },
  { name: "of", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "package", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "private", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "protected", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "public", reservedFor: [NameType.Parameter, NameType.Operation] },
  {
    name: "requestoptions",
    reservedFor: [NameType.Parameter, NameType.Operation]
  },
  { name: "require", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "return", reservedFor: [NameType.Parameter, NameType.Operation] },
  {
    name: "set",
    reservedFor: [NameType.Parameter, NameType.Operation, ...Newable]
  },
  { name: "static", reservedFor: [NameType.Parameter, NameType.Operation] },
  {
    name: "string",
    reservedFor: [NameType.Parameter, NameType.Operation, ...Newable]
  },
  { name: "super", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "switch", reservedFor: [NameType.Parameter, NameType.Operation] },
  {
    name: "symbol",
    reservedFor: [NameType.Parameter, NameType.Operation, ...Newable]
  },
  { name: "this", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "throw", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "true", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "try", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "type", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "typeof", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "var", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "void", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "while", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "with", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "yield", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "arguments", reservedFor: [NameType.Parameter, NameType.Operation] }
];
