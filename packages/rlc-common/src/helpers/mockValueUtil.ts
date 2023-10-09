// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getImmediateParentsNames } from "../buildObjectTypes.js";
import {
  ArraySchema,
  DictionarySchema,
  ObjectSchema,
  Schema,
  SchemaContext
} from "../interfaces.js";
import {
  TypeScriptType,
  getArrayObjectType,
  getNativeArrayType,
  getRecordType,
  getUnionType,
  isArrayObject,
  isNativeArray,
  leaveBracket,
  leaveStringQuotes,
  toTypeScriptTypeFromName,
  toTypeScriptTypeFromSchema
} from "./typeUtil.js";

export function mockParameterTypeValue(
  type: string,
  parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
): string | undefined {
  type = leaveBracket(type?.trim());
  let tsType: TypeScriptType | undefined;
  // Give priority to suggest the ts-type from schema
  if (schemaMap.has(type)) {
    tsType = toTypeScriptTypeFromSchema(schemaMap.get(type)!);
  }
  // Fallback to suggest ts-type from the type iteself
  if (!tsType) {
    tsType = toTypeScriptTypeFromName(type);
  }
  switch (tsType) {
    case TypeScriptType.string:
      return `'{Your ${leaveStringQuotes(parameterName)}}'`;
    case TypeScriptType.number:
      return "123";
    case TypeScriptType.boolean:
      return "true";
    case TypeScriptType.date:
      return "new Date()";
    case TypeScriptType.unknown:
      return `"Unknown Type"`;
    case TypeScriptType.object: {
      return mockObjectValues(type, parameterName, schemaMap, path);
    }
    case TypeScriptType.array: {
      return mockArrayValues(type, parameterName, schemaMap, path);
    }
    case TypeScriptType.record: {
      return mockRecordValues(type, parameterName, schemaMap, path);
    }
    case TypeScriptType.enum:
    case TypeScriptType.union: {
      return mockUnionValues(type, parameterName, schemaMap, path);
    }
    case TypeScriptType.constant:
      return type;
  }
  return `undefined /**FIXME */`;
}

function mockUnionValues(
  type: string,
  parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
) {
  const schema = schemaMap.get(type);
  if (schema && schema.enum && schema.enum.length > 0) {
    const first = schema.enum[0];
    const itemType = schema.typeName ?? schema.type;
    if (itemType === "string" || (first.typeName ?? first.type) === undefined) {
      return `"${first}"`;
    } else if (itemType === "number") {
      return `${first}`;
    }
    return mockParameterTypeValue(
      first.typeName ?? first.type ?? first,
      parameterName,
      schemaMap,
      path
    );
  }
  const unionType = getUnionType(type);
  return mockParameterTypeValue(unionType, parameterName, schemaMap, path);
}

function mockRecordValues(
  type: string,
  parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
) {
  let recordType;
  const schema = schemaMap.get(type) as DictionarySchema;
  if (schema && schema.additionalProperties) {
    recordType =
      schema.additionalProperties.typeName ?? schema.additionalProperties.type;
    if (recordType !== "string" && !schemaMap.has(recordType)) {
      schemaMap.set(recordType, schema.additionalProperties);
    }
  } else {
    recordType = getRecordType(type);
  }

  return recordType
    ? `{"key": ${mockParameterTypeValue(
        recordType,
        parameterName,
        schemaMap,
        path
      )}}`
    : `{}`;
}

function mockArrayValues(
  type: string,
  parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
) {
  let arrayType;
  const schema = schemaMap.get(type) as ArraySchema;
  if (schema && schema.items) {
    arrayType = schema.items.typeName ?? schema.items.type;
    if (arrayType !== "string" && !schemaMap.has(arrayType)) {
      schemaMap.set(arrayType, schema.items);
    }
  } else if (isArrayObject(type)) {
    arrayType = getArrayObjectType(type);
  } else if (isNativeArray(type)) {
    arrayType = getNativeArrayType(type);
  }
  const itemValue = arrayType
    ? mockParameterTypeValue(arrayType, parameterName, schemaMap, path)
    : undefined;
  return itemValue ? `[${itemValue}]` : `[]`;
}

function mockObjectValues(
  type: string,
  _parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
) {
  if (path.has(type)) {
    // skip generating if self referenced
    return `{} as any /**FIXME */`;
  }
  path.add(type);
  // add object's properties
  const values: string[] = [];
  const schema = schemaMap.get(type) as ObjectSchema;
  const allPropNames = new Set<string>();
  extractObjectProperties(
    schema?.properties ?? {},
    schemaMap,
    allPropNames,
    values,
    path
  );

  // add parents' properties
  const parents = getAllParents(schema, schemaMap);
  for (const parent of parents) {
    extractObjectProperties(
      (parent as ObjectSchema)?.properties ?? {},
      schemaMap,
      allPropNames,
      values,
      path
    );
  }

  return `{${values.join(", ")}}`;
}

function getAllParents(
  schema: ObjectSchema,
  schemaMap: Map<string, Schema>
): Schema[] {
  if (!schema) {
    return [];
  }
  const isVisited = new Set<string>();
  dfs(schema);
  return Array.from(isVisited)
    .filter((p) => schemaMap.get(p) !== undefined)
    .map((p) => schemaMap.get(p)!);

  function dfs(root?: Schema) {
    if (!root) {
      return;
    }
    const parents = getImmediateParentsNames(root, [SchemaContext.Input]);
    for (const parent of parents) {
      if (isVisited.has(parent)) {
        continue;
      }
      dfs(schemaMap.get(parent));
      isVisited.add(parent);
    }
  }
}

function extractObjectProperties(
  properties: Record<string, Schema>,
  schemaMap: Map<string, Schema>,
  allPropNames: Set<string>,
  values: string[],
  path: Set<string>
) {
  for (const prop in properties) {
    const propName = prop;
    const propertySchema = properties[prop];
    if (propertySchema.readOnly) {
      continue;
    }
    if (propertySchema.type === "never") {
      continue;
    }
    if (allPropNames.has(propName)) {
      continue;
    }
    const propType = propertySchema.typeName ?? propertySchema.type;
    if (propType !== "string" && !schemaMap.has(propType)) {
      schemaMap.set(propType, propertySchema);
    }
    allPropNames.add(propName);
    const propRetValue =
      `${propName}: ` +
      mockParameterTypeValue(propType, propName, schemaMap, path);
    values.push(propRetValue);
  }
}
