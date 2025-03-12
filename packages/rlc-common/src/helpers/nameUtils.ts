// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface NormalizeNameOption {
  shouldGuard?: boolean;
  customReservedNames?: ReservedName[];
  casingOverride?: CasingConvention;
  numberPrefixOverride?: string;
}

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
  OperationGroup,
  Method,
  EnumMemberName
}

const Newable = [NameType.Class, NameType.Interface, NameType.OperationGroup];

export const ReservedModelNames: ReservedName[] = [
  { name: "any", reservedFor: [NameType.Parameter] },
  { name: "as", reservedFor: [NameType.Parameter] },
  { name: "assert", reservedFor: [NameType.Parameter] },
  { name: "async", reservedFor: [NameType.Parameter] },
  { name: "await", reservedFor: [NameType.Parameter] },
  { name: "boolean", reservedFor: [NameType.Parameter, ...Newable] },
  { name: "break", reservedFor: [NameType.Parameter] },
  { name: "case", reservedFor: [NameType.Parameter] },
  { name: "catch", reservedFor: [NameType.Parameter] },
  { name: "class", reservedFor: [NameType.Parameter] },
  { name: "const", reservedFor: [NameType.Parameter] },
  { name: "constructor", reservedFor: [NameType.Parameter] },
  { name: "continue", reservedFor: [NameType.Parameter] },
  { name: "date", reservedFor: [NameType.Parameter, ...Newable] },
  { name: "debugger", reservedFor: [NameType.Parameter] },
  { name: "declare", reservedFor: [NameType.Parameter] },
  { name: "default", reservedFor: [NameType.Parameter] },
  { name: "delete", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "do", reservedFor: [NameType.Parameter] },
  { name: "else", reservedFor: [NameType.Parameter] },
  { name: "enum", reservedFor: [NameType.Parameter] },
  { name: "error", reservedFor: [NameType.Parameter, ...Newable] },
  { name: "export", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "extends", reservedFor: [NameType.Parameter] },
  { name: "false", reservedFor: [NameType.Parameter] },
  { name: "finally", reservedFor: [NameType.Parameter] },
  { name: "for", reservedFor: [NameType.Parameter] },
  { name: "from", reservedFor: [NameType.Parameter] },
  { name: "function", reservedFor: [NameType.Parameter, ...Newable] },
  { name: "get", reservedFor: [NameType.Parameter] },
  { name: "if", reservedFor: [NameType.Parameter] },
  { name: "implements", reservedFor: [NameType.Parameter] },
  { name: "import", reservedFor: [NameType.Parameter] },
  { name: "in", reservedFor: [NameType.Parameter] },
  { name: "instanceof", reservedFor: [NameType.Parameter] },
  { name: "interface", reservedFor: [NameType.Parameter] },
  { name: "let", reservedFor: [NameType.Parameter] },
  { name: "module", reservedFor: [NameType.Parameter] },
  { name: "new", reservedFor: [NameType.Parameter] },
  { name: "null", reservedFor: [NameType.Parameter] },
  { name: "number", reservedFor: [NameType.Parameter, ...Newable] },
  { name: "of", reservedFor: [NameType.Parameter] },
  { name: "package", reservedFor: [NameType.Parameter] },
  { name: "private", reservedFor: [NameType.Parameter] },
  { name: "protected", reservedFor: [NameType.Parameter] },
  { name: "public", reservedFor: [NameType.Parameter, NameType.Operation] },
  { name: "requestoptions", reservedFor: [NameType.Parameter] },
  { name: "require", reservedFor: [NameType.Parameter] },
  { name: "return", reservedFor: [NameType.Parameter] },
  { name: "set", reservedFor: [NameType.Parameter, ...Newable] },
  { name: "static", reservedFor: [NameType.Parameter] },
  { name: "string", reservedFor: [NameType.Parameter, ...Newable] },
  { name: "super", reservedFor: [NameType.Parameter] },
  { name: "switch", reservedFor: [NameType.Parameter] },
  { name: "symbol", reservedFor: [NameType.Parameter, ...Newable] },
  { name: "this", reservedFor: [NameType.Parameter] },
  { name: "throw", reservedFor: [NameType.Parameter] },
  { name: "true", reservedFor: [NameType.Parameter] },
  { name: "try", reservedFor: [NameType.Parameter] },
  { name: "type", reservedFor: [NameType.Parameter] },
  { name: "typeof", reservedFor: [NameType.Parameter] },
  { name: "var", reservedFor: [NameType.Parameter] },
  { name: "void", reservedFor: [NameType.Parameter] },
  { name: "while", reservedFor: [NameType.Parameter] },
  { name: "with", reservedFor: [NameType.Parameter] },
  { name: "yield", reservedFor: [NameType.Parameter] },
  { name: "arguments", reservedFor: [NameType.Parameter] },
  { name: "global", reservedFor: [...Newable] },
  // reserve client for codegen
  { name: "client", reservedFor: [NameType.Parameter] },
  { name: "endpoint", reservedFor: [NameType.Parameter] },
  { name: "apiVersion", reservedFor: [NameType.Parameter] }
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
    case NameType.Operation:
      return "";
    case NameType.Property:
      return "Property";
    case NameType.OperationGroup:
      return "Operations";
    case NameType.Parameter:
      return "Param";
    case NameType.Class:
    case NameType.Interface:
    case NameType.Method:
    default:
      return "Model";
  }
}

export function normalizeName(
  name: string,
  nameType: NameType,
  shouldGuard?: boolean,
  customReservedNames?: ReservedName[],
  casingOverride?: CasingConvention
): string;
export function normalizeName(
  name: string,
  nameType: NameType,
  options?: NormalizeNameOption
): string;
export function normalizeName(
  name: string,
  nameType: NameType,
  optionsOrShouldGuard?: NormalizeNameOption | boolean,
  optionalCustomReservedNames?: ReservedName[],
  optionalCasingOverride?: CasingConvention
): string {
  let shouldGuard: boolean | undefined,
    customReservedNames: ReservedName[],
    casingOverride: CasingConvention | undefined,
    numberPrefixOverride: string | undefined;
  if (typeof optionsOrShouldGuard === "boolean") {
    shouldGuard = optionsOrShouldGuard;
    customReservedNames = optionalCustomReservedNames ?? [];
    casingOverride = optionalCasingOverride;
  } else {
    shouldGuard = optionsOrShouldGuard?.shouldGuard;
    customReservedNames = optionsOrShouldGuard?.customReservedNames ?? [];
    casingOverride = optionsOrShouldGuard?.casingOverride;
    numberPrefixOverride = optionsOrShouldGuard?.numberPrefixOverride;
  }
  if (name.startsWith("$DO_NOT_NORMALIZE$")) {
    return name.replace("$DO_NOT_NORMALIZE$", "");
  }
  const casingConvention = casingOverride ?? getCasingConvention(nameType);
  const parts = deconstruct(name);
  if (parts.length === 0) {
    return name;
  }
  const [firstPart, ...otherParts] = parts;
  const normalizedFirstPart = toCasing(firstPart, casingConvention, true);
  const normalizedParts = (otherParts || [])
    .map((part) => toCasing(part, CasingConvention.Pascal))
    .join("");

  const normalized = `${normalizedFirstPart}${normalizedParts}`;
  const result = shouldGuard
    ? guardReservedNames(normalized, nameType, customReservedNames)
    : normalized;
  return fixLeadingNumber(result, nameType, numberPrefixOverride);
}

export function fixLeadingNumber(
  name: string,
  nameType: NameType,
  prefix: string = "_"
): string {
  const casingConvention = getCasingConvention(nameType);
  if (!name || !name.match(/^[-.]?\d/)) {
    return name;
  }
  return `${toCasing(prefix, casingConvention)}${name}`;
}

function isFullyUpperCase(
  identifier: string,
  maxUppercasePreserve: number = 3
) {
  const len = identifier.length;
  if (len > 1) {
    if (
      len <= maxUppercasePreserve &&
      identifier === identifier.toUpperCase()
    ) {
      return true;
    }

    if (len <= maxUppercasePreserve + 1 && identifier.endsWith("s")) {
      const i = identifier.substring(0, len - 1);
      if (i.toUpperCase() === i) {
        return true;
      }
    }
  }
  return false;
}

function deconstruct(identifier: string): Array<string> {
  return `${identifier}`
    .replace(/([a-z]+)([A-Z])/g, "$1 $2") // Add a space in between camelCase words(e.g. fooBar => foo Bar)
    .replace(/(\d+)/g, " $1 ") // Adds a space after numbers(e.g. foo123Bar => foo123 bar)
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b([A-Z]+)([A-Z])s([^a-z])(.*)/g, "$1$2« $3$4") // Add a space after a plural upper cased word(e.g. MBsFoo => MBs Foo)
    .replace(/\b([A-Z]+)([A-Z])([a-z]+)/g, "$1 $2$3") // Add a space between an upper case word(2 char+) and the last captial case.(e.g. SQLConnection -> SQL Connection)
    .replace(/«/g, "s")
    .trim()
    .split(/[\W|_]+/)
    .map((each) => (isFullyUpperCase(each) ? each : each.toLowerCase()))
    .filter((part) => !!part);
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
    case NameType.EnumMemberName:
      return CasingConvention.Pascal;
    case NameType.File:
    case NameType.Property:
    case NameType.Operation:
    case NameType.Parameter:
    case NameType.Method:
      return CasingConvention.Camel;
  }
}

function toCasing(
  str: string,
  casing: CasingConvention,
  keepConsistent = false
): string {
  const firstChar =
    casing === CasingConvention.Pascal
      ? str.charAt(0).toUpperCase()
      : str.charAt(0).toLowerCase();
  const allLowerCases =
    casing !== CasingConvention.Pascal &&
    keepConsistent &&
    str.toUpperCase() === str;
  return allLowerCases ? str.toLowerCase() : `${firstChar}${str.substring(1)}`;
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

  return str.charAt(0).toLowerCase() + str.slice(1);
}
