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
      return `"{Your ${leaveStringQuotes(parameterName)}}"`;
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
    case TypeScriptType.enum: {
      return mockEnumValues(type, parameterName, schemaMap, path);
    }
    case TypeScriptType.union: {
      return mockUnionValues(type, parameterName, schemaMap, path);
    }
    case TypeScriptType.constant:
      return type;
  }
  return `undefined /**FIXME */`;
}

function mockEnumValues(
  type: string,
  parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
) {
  const schema = schemaMap.get(type);
  if (schema && schema.enum && schema.enum.length > 0) {
    const first = schema.enum[0];
    return typeof first === "string" ? `"${first}"` : `${first}`;
  }
  return mockParameterTypeValue(
    getUnionType(type),
    parameterName,
    schemaMap,
    path
  );
}

function mockUnionValues(
  type: string,
  parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
) {
  const schema = schemaMap.get(type);
  if (schema && schema.enum && schema.enum.length > 0) {
    return mockParameterTypeValue(
      getAccurateTypeName(schema.enum[0]) ?? schema.enum[0],
      parameterName,
      schemaMap,
      path
    );
  }
  return mockParameterTypeValue(
    getUnionType(type),
    parameterName,
    schemaMap,
    path
  );
}

function mockRecordValues(
  type: string,
  parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
) {
  let recordType = getRecordType(type);
  const schema = schemaMap.get(type) as DictionarySchema;
  if (schema && schema.additionalProperties) {
    recordType = getAccurateTypeName(schema.additionalProperties);
    addToSchemaMap(schemaMap, schema.additionalProperties);
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
    arrayType = getAccurateTypeName(schema.items);
    addToSchemaMap(schemaMap, schema.items);
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
  // Extract all properties from the schema
  const allProperties = getAllProperties(schemaMap.get(type), schemaMap);
  const values = extractObjectProperties(allProperties, schemaMap, path);

  path.delete(type);
  return `{${values.join(", ")}}`;
}

function getAllProperties(
  schema?: ObjectSchema,
  schemaMap: Map<string, Schema> = new Map()
): Schema[] {
  const propertiesMap: Map<string, Schema> = new Map();
  if (!schema) {
    return [];
  }
  getImmediateParentsNames(schema, [SchemaContext.Input])?.forEach((p) => {
    getAllProperties(schemaMap.get(p), schemaMap).forEach((prop) => {
      propertiesMap.set(prop.name, prop);
    });
  });
  for (const prop in schema.properties) {
    propertiesMap.set(prop, schema.properties[prop]);
  }
  return [...propertiesMap.values()];
}

function extractObjectProperties(
  properties: Schema[],
  schemaMap: Map<string, Schema> = new Map(),
  path: Set<string> = new Set()
) {
  const values: string[] = [];
  for (const property of properties) {
    if (property.readOnly || property.type === "never") {
      continue;
    }
    addToSchemaMap(schemaMap, property);
    values.push(
      `${property.name}: ` +
        mockParameterTypeValue(
          getAccurateTypeName(property),
          property.name,
          schemaMap,
          path
        )
    );
  }
  return values;
}

function getAccurateTypeName(schema: Schema) {
  // For extensible enum, fallback to use the type
  if (schema.typeName === "string" && schema.enum && schema.enum.length > 0) {
    return schema.type;
  }
  return schema.typeName ?? schema.type;
}

function addToSchemaMap(schemaMap: Map<string, Schema>, schema: Schema) {
  const type = getAccurateTypeName(schema);
  if (
    !schemaMap.has(type) &&
    !["string", "number", "boolean"].includes(schema.type)
  ) {
    schemaMap.set(type, schema);
  }
}
