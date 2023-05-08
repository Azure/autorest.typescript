// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface ReservedName {
  name: string;
  reservedFor: NameType[];
}

export enum NameType {
  Class,
  File,
  Interface,
  Property,
  Parameter,
  Operation,
  OperationGroup
}

const Newable = [NameType.Class, NameType.Interface, NameType.OperationGroup];

const ReservedModelNames: ReservedName[] = [
  { name: "any", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "as", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "boolean", reservedFor: [NameType.Parameter, NameType.Operation, ...Newable] },
  { name: "break", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "case", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "catch", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "class", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "const", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "constructor", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "continue", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "date", reservedFor: [NameType.Parameter, NameType.Operation, ...Newable] },
  { name: "debugger", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "declare", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "default", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "delete", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "do", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "else", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "enum", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "error", reservedFor: [NameType.Parameter, NameType.Operation, ...Newable] },
  { name: "export", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "extends", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "false", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "finally", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "for", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "from", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "function", reservedFor: [NameType.Parameter, NameType.Operation, ...Newable] },
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
  { name: "number", reservedFor: [NameType.Parameter, NameType.Operation, ...Newable] },
  { name: "of", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "package", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "private", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "protected", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "public", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "requestoptions", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "require", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "return", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "set", reservedFor: [NameType.Parameter, NameType.Operation, ...Newable] },
  { name: "static", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "string", reservedFor: [NameType.Parameter, NameType.Operation, ...Newable] },
  { name: "super", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "switch", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "symbol", reservedFor: [NameType.Parameter, NameType.Operation, ...Newable] },
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

export enum CasingConvention {
  Pascal,
  Camel
}

export function guardReservedNames(
  name: string,
  nameType: NameType,
  customReservedNames: ReservedName[] = []
): string {
  const suffix = getSuffix(nameType);
  return [...ReservedModelNames, ...customReservedNames]
    .filter((r) => r.reservedFor.includes(nameType))
    .find((r) => r.name === name.toLowerCase())
    ? `${name}${suffix}`
    : name;
}

function getSuffix(nameType?: NameType) {
  switch (nameType) {
    case NameType.File:
    case NameType.Property:
      return "";
    case NameType.Operation:
      return "Operation";
    case NameType.OperationGroup:
      return "Operations";
    case NameType.Parameter:
      return "Param";
    case NameType.Class:
    case NameType.Interface:
    default:
      return "Model";
  }
}

export function normalizeName(
  name: string,
  nameType: NameType,
  shouldGuard?: boolean,
  customReservedNames: ReservedName[] = [],
  casingOverride?: CasingConvention
): string {
  if (name.startsWith("$DO_NOT_NORMALIZE$")) {
    return name.replace("$DO_NOT_NORMALIZE$", "");
  }
  const casingConvention = casingOverride ?? getCasingConvention(nameType);
  const sanitizedName = sanitizeName(name);
  const parts = getNameParts(sanitizedName);
  const [firstPart, ...otherParts] = parts;
  const normalizedFirstPart = toCasing(firstPart, casingConvention);
  const normalizedParts = (otherParts || [])
    .map((part) =>
      part === "null" ? part : toCasing(part, CasingConvention.Pascal)
    )
    .join("");

  const normalized = checkBeginning(`${normalizedFirstPart}${normalizedParts}`);
  return shouldGuard
    ? guardReservedNames(normalized, nameType, customReservedNames)
    : normalized;
}

function checkBeginning(name: string): string {
  if (name.startsWith("@")) {
    return name.substring(1);
  }
  return name;
}

function sanitizeName(name: string): string {
  // Remove \, " and ' from name string
  return name.replace(/["'\\]+/g, "");
}

export function getModelsName(title: string): string {
  const spaceRemovedTitle = title.replace(/ /g, "");
  return `${spaceRemovedTitle.replace("Client", "")}Models`;
}

export function getMappersName(title: string): string {
  const spaceRemovedTitle = title.replace(/ /g, "");
  return `${spaceRemovedTitle.replace("Client", "")}Mappers`;
}

function getCasingConvention(nameType: NameType) {
  switch (nameType) {
    case NameType.Class:
    case NameType.Interface:
    case NameType.OperationGroup:
      return CasingConvention.Pascal;
    case NameType.File:
    case NameType.Property:
    case NameType.Operation:
    case NameType.Parameter:
      return CasingConvention.Camel;
  }
}

/**
 * TODO: Improve this function to handle cases such as TEST -> test. Current basic implementation
 * results in TEST -> test or Test (depending on the CasingConvention). We should switch to relay
 * on Modeler four namer for this once it is stable
 */
function toCasing(str: string, casing: CasingConvention): string {
  let value = str;
  if (value === value.toUpperCase()) {
    value = str.toLowerCase();
  }

  const firstChar =
    casing === CasingConvention.Pascal
      ? value.charAt(0).toUpperCase()
      : value.charAt(0).toLocaleLowerCase();
  return `${firstChar}${value.substring(1)}`;
}

function getNameParts(name: string) {
  const parts = name.split(/[-._ ]+/);

  return parts.length > 0 ? parts : [name];
}

export function pascalCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelCase(
  str: string,
  options: { uppercaseThreshold?: number } = {}
) {
  const { uppercaseThreshold = 4 } = options;
  const thresholdRegex = new RegExp(
    `^(?<![A-Z])[A-Z]{1,${uppercaseThreshold}}(?![A-Z])`
  );
  if (!thresholdRegex.test(str)) {
    return str;
  }

  return str.charAt(0).toLocaleLowerCase() + str.slice(1);
}
