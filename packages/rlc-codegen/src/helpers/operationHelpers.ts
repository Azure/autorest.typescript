// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  MethodSignatureStructure,
  OptionalKind,
  ParameterDeclarationStructure
} from "ts-morph";
import {
  Methods,
  ObjectSchema,
  PathParameter,
  RLCModel,
  SchemaContext
} from "../interfaces.js";
import { pascalCase } from "./nameUtils.js";
import { isObjectSchema } from "./schemaHelpers.js";

export function buildMethodDefinitions(
  methods: Methods,
  pathParams: PathParameter[] = []
): OptionalKind<MethodSignatureStructure>[] {
  const methodDefinitions: OptionalKind<MethodSignatureStructure>[] = [];
  for (const key of Object.keys(methods)) {
    const verbMethods = methods[key];

    for (const method of verbMethods) {
      const description = method.description;
      let areAllOptional = method.hasOptionalOptions;

      methodDefinitions.push({
        name: key,
        ...(description && { docs: [{ description }] }),
        parameters: [
          ...getPathParamDefinitions(pathParams),
          {
            name: "options",
            hasQuestionToken: areAllOptional,
            type: pascalCase(method.optionsName)
          }
        ],
        returnType: `StreamableMethod<${method.returnType}>`
      });
    }
  }

  return methodDefinitions;
}

export function getPathParamDefinitions(
  pathParams: PathParameter[]
): OptionalKind<ParameterDeclarationStructure>[] {
  return pathParams.map(({ name, type, description }) => {
    return {
      name,
      type,
      description
    };
  });
}

export function hasPagingOperations(model: RLCModel) {
  for (const [path, details] of Object.entries(model.paths)) {
    if (Boolean(details.annotations?.isPageable)) {
      return true;
    }
  }
  return false;
}

export function hasPollingOperations(model: RLCModel) {
  for (const [path, details] of Object.entries(model.paths)) {
    if (Boolean(details.annotations?.isLongRunning)) {
      return true;
    }
  }
  return false;
}

export function hasUnexpectedHelper(model: RLCModel) {
  const pathDictionary = model.paths;
  for (const details of Object.values(pathDictionary)) {
    for (const methodDetails of Object.values(details.methods)) {
      const successTypes = methodDetails[0].responseTypes.success;
      const errorTypes = methodDetails[0].responseTypes.error;

      if (successTypes.length > 0 && errorTypes.length > 0 && !!errorTypes[0]) {
        return true;
      }
    }
  }
  return false;
}

export function hasInputModels(model: RLCModel) {
  return hasSchemaContextObject(model, [SchemaContext.Input]);
}
export function hasOutputModels(model: RLCModel) {
  return hasSchemaContextObject(model, [
    SchemaContext.Output,
    SchemaContext.Exception
  ]);
}

function hasSchemaContextObject(model: RLCModel, schemaUsage: SchemaContext[]) {
  const objectSchemas: ObjectSchema[] = (model.schemas ?? []).filter(
    (o) =>
      isObjectSchema(o) &&
      (o as ObjectSchema).usage?.some((u) => schemaUsage.includes(u))
  );

  return objectSchemas.length > 0;
}
