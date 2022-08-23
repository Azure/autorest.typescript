// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Schema, SchemaContext } from "@azure-tools/rlc-codegen";
import { Program, Type } from "@cadl-lang/compiler";
import { getAllRoutes } from "@cadl-lang/rest/http";
import { getSchemaForType } from "../modelUtils.js";

export function transformSchemas(program: Program) {
  const schemas: Schema[] = [];
  const [routes, _diagnostics] = getAllRoutes(program);
  const modelMap: Map<Type, SchemaContext[]> = new Map<Type, SchemaContext[]>();
  for (const route of routes) {
    if (route.parameters.bodyParameter) {
      const bodyModel = route.parameters.bodyType;
      if (bodyModel && bodyModel.kind === "Model") {
        setModelMap(bodyModel, SchemaContext.Input);
      }
    }
    for (const resp of route.responses) {
      for (const resps of resp.responses) {
        const respModel = resps.body;
        if (!respModel) {
          continue;
        }
        if (respModel.type.kind === "Model") {
          if (respModel.type.templateArguments && respModel.type.templateArguments.length) {
            for(const temp of respModel.type.templateArguments) {
              setModelMap(temp, SchemaContext.Output);
            }
          }
          setModelMap(respModel.type, SchemaContext.Output);
        }
      }
    }
  }
  modelMap.forEach((context, cadlModel) => {
    const model = getSchemaForType(program, cadlModel, context);
    model.usage = context;
    schemas.push(model);
  });
  function setModelMap(type: Type, schemaContext: SchemaContext) {
    if (modelMap.has(type)) {
      const context = modelMap.get(type);
      if (context && context.indexOf(schemaContext) === -1) {
        context.push(schemaContext);
        modelMap.set(type, context);
      }
    } else {
      modelMap.set(type, [schemaContext]);
    }
  }
  return schemas;
}
