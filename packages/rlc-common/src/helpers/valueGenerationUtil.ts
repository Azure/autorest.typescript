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

/**
 * Generate parameter type value for the given type and parameter name
 * @param type the typescript type
 * @param parameterName the parameter name
 * @param schemaMap the schema info to help generate the value
 * @param path optional path to help detect self reference
 * @param _allowMockValue the flag to indicate whether to allow mock value, currently we always generate mock value
 * @returns
 */
export function generateParameterTypeValue(
  type: string,
  parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set(),
  _allowMockValue = true
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
      return generateObjectValues(type, parameterName, schemaMap, path);
    }
    case TypeScriptType.array: {
      return generateArrayValues(type, parameterName, schemaMap, path);
    }
    case TypeScriptType.record: {
      return generateRecordValues(type, parameterName, schemaMap, path);
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
    return schema.enum[0].type;
  }
  return generateParameterTypeValue(
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
    addToSchemaMap(schemaMap, schema.enum[0]);
    return generateParameterTypeValue(
      getAccurateTypeName(schema.enum[0]) ?? schema.enum[0],
      parameterName,
      schemaMap,
      path
    );
  }
  return generateParameterTypeValue(
    getUnionType(type),
    parameterName,
    schemaMap,
    path
  );
}

function generateRecordValues(
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
    ? `{"key": ${generateParameterTypeValue(
        recordType,
        parameterName,
        schemaMap,
        path
      )}}`
    : `{}`;
}

function generateArrayValues(
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
    ? generateParameterTypeValue(arrayType, parameterName, schemaMap, path)
    : undefined;
  return itemValue ? `[${itemValue}]` : `[]`;
}

function generateObjectValues(
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
): Map<string, Schema> {
  const propertiesMap: Map<string, Schema> = new Map();
  if (!schema) {
    return new Map();
  }
  getImmediateParentsNames(schema, [SchemaContext.Input])?.forEach((p) => {
    const parentProperties = getAllProperties(schemaMap.get(p), schemaMap);
    for (const prop of parentProperties.keys()) {
      propertiesMap.set(prop, parentProperties.get(prop)!);
    }
  });
  for (const prop in schema.properties) {
    propertiesMap.set(prop, schema.properties[prop]);
  }
  return propertiesMap;
}

function extractObjectProperties(
  properties: Map<string, Schema>,
  schemaMap: Map<string, Schema> = new Map(),
  path: Set<string> = new Set()
) {
  const values: string[] = [];
  for (const name of properties.keys()) {
    const property = properties.get(name);
    if (!property || property.readOnly || property.type === "never") {
      continue;
    }
    addToSchemaMap(schemaMap, property);
    values.push(
      `${name}: ` +
        generateParameterTypeValue(
          getAccurateTypeName(property),
          name,
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
  if (!type) {
    return;
  }
  if (
    !schemaMap.has(type) &&
    !["string", "number", "boolean"].includes(schema.type)
  ) {
    schemaMap.set(type, schema);
  }
}
