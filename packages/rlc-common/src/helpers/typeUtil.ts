// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Schema } from "../interfaces.js";

export function isRecord(type: string) {
  return /^Record<([a-zA-Z]+),(\s*)(?<type>.+)>$/.test(type);
}

export function getRecordType(type: string) {
  return /^Record<([a-zA-Z]+),(\s*)(?<type>.+)>$/.exec(type)?.groups?.type;
}

export function isArray(type: string) {
  return isArrayObject(type) || isNativeArray(type);
}

export function isArrayObject(type: string) {
  return /(^Array<(.+)>$)/g.test(type);
}

export function getArrayObjectType(type: string) {
  return /^Array<(?<type>.+)>$/g.exec(type)?.groups?.type;
}

export function isNativeArray(type: string) {
  return /(^.+)\[\]$/g.test(type);
}

export function getNativeArrayType(type: string) {
  return /(?<type>.+)\[\]/g.exec(type)?.groups?.type;
}

export function isUnion(type: string) {
  const members = type.split("|").map((m) => m.trim());
  return members.length > 1 && !isStringLiteral(type) && !isRecord(type);
}

export function getUnionType(type: string) {
  return leaveBracket(type.split("|").map((m) => m.trim())[0]);
}

export function leaveBracket(type: string) {
  if (!type || type.length < 2) {
    return type;
  } else if (type.startsWith("(") && type.endsWith(")")) {
    return type.slice(1, type.length - 1);
  }
  return type;
}

export function leaveStringQuotes(str: string) {
  if (isStringLiteral(str)) {
    return str.slice(1, str.length - 1);
  }
  return str;
}

export enum TypeScriptType {
  string,
  date,
  number,
  boolean,
  constant,
  record,
  array,
  object,
  union,
  unknown,
  enum
}

export function toTypeScriptTypeFromSchema(
  schema: Schema
): TypeScriptType | undefined {
  schema.type = schema.type.trim();
  if (
    schema.type === "string" &&
    schema.typeName === "Date | string" &&
    schema.outputTypeName === "string"
  ) {
    return TypeScriptType.date;
  } else if (schema.enum && schema.enum.length > 0) {
    if (schema.type === "union" || schema.type === "object") {
      // Include both union and named union
      return TypeScriptType.union;
    } else {
      // Include both extensible and fixed enum
      return TypeScriptType.enum;
    }
  } else if (
    schema.isConstant === true ||
    isConstant(schema.typeName ?? schema.type)
  ) {
    return TypeScriptType.constant;
  } else if (schema.type === "number") {
    return TypeScriptType.number;
  } else if (schema.type === "boolean") {
    return TypeScriptType.boolean;
  } else if (schema.type === "string") {
    return TypeScriptType.string;
  } else if (schema.type === "unknown") {
    return TypeScriptType.unknown;
  } else if (schema.type === "dictionary") {
    return TypeScriptType.record;
  } else if (schema.type === "array") {
    return TypeScriptType.array;
  } else if (schema.type === "object") {
    return TypeScriptType.object;
  }
}

export function toTypeScriptTypeFromName(
  typeName: string
): TypeScriptType | undefined {
  typeName = typeName.trim();
  if (typeName === "Date") {
    return TypeScriptType.date;
  } else if (typeName === "string") {
    return TypeScriptType.string;
  } else if (typeName === "number") {
    return TypeScriptType.number;
  } else if (typeName === "boolean") {
    return TypeScriptType.boolean;
  } else if (typeName === "unknown") {
    return TypeScriptType.unknown;
  } else if (isConstant(typeName)) {
    return TypeScriptType.constant;
  } else if (isRecord(typeName)) {
    return TypeScriptType.record;
  } else if (isArray(typeName)) {
    return TypeScriptType.array;
  } else if (isUnion(typeName)) {
    return TypeScriptType.union;
  }
}

export function isConstant(typeName: string) {
  return (
    ["never", "null"].includes(typeName) ||
    isBoolLiteral(typeName) ||
    isNumericLiteral(typeName) ||
    isStringLiteral(typeName)
  );
}

export function isNumericLiteral(str: string) {
  if (typeof str !== "string") return false;
  return !isNaN(Number(str)) && !isNaN(parseFloat(str));
}

export function isBoolLiteral(str: string) {
  return str === "true" || str === "false";
}

export function isStringLiteral(type: string) {
  if (type.length < 2) {
    return false;
  }
  const first = type[0];
  const lastPos = type.length - 1;
  return (
    first === type[lastPos] &&
    (first === '"' || first === "'") &&
    type.indexOf(first, 1) === lastPos
  );
}
