// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  MethodSignatureStructure,
  OptionalKind,
  ParameterDeclarationStructure
} from "ts-morph";
import { Methods, PathParameter } from "../interfaces.js";
import { pascalCase } from "./nameUtils.js";

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
