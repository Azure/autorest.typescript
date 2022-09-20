// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Schema, SchemaContext } from "@azure-tools/rlc-codegen";
import { Model, Program, Type } from "@cadl-lang/compiler";
import { getResourceOperation } from "@cadl-lang/rest";
import { getAllRoutes } from "@cadl-lang/rest/http";
import { getSchemaForType, includeDerivedModel } from "../modelUtils.js";
const modelKey = Symbol("typescript-models");

export function transformSchemas(program: Program) {
  const schemas: Schema[] = [];
  const schemaSet: Set<string> = new Set<string>();
  const [routes, _diagnostics] = getAllRoutes(program);
  for (const route of routes) {
    const operation = getResourceOperation(program, route.operation);
    if (operation) {
      const bodyModel = operation.resourceType;
      if (bodyModel && bodyModel.kind === "Model") {
        getGeneratedModels(bodyModel, SchemaContext.Input);
      }
    } else if (route.parameters.bodyType) {
      const bodyModel = route.parameters.bodyType;
      if (bodyModel && bodyModel.kind === "Model") {
        getGeneratedModels(bodyModel, SchemaContext.Input);
      }
    }
    for (const resp of route.responses) {
      for (const resps of resp.responses) {
        const respModel = resps.body;
        if (!respModel) {
          continue;
        }
        getGeneratedModels(respModel.type, SchemaContext.Output);
      }
    }
  }
  program.stateMap(modelKey).forEach((context, cadlModel) => {
    const model = getSchemaForType(program, cadlModel, context);
    model.usage = context;
    const modelStr = JSON.stringify(model);
    if (!schemaSet.has(modelStr)) {
      schemas.push(model);
      schemaSet.add(modelStr);
    }
  });
  function setModelMap(type: Type, schemaContext: SchemaContext) {
    if (program.stateMap(modelKey).get(type)) {
      const context = program.stateMap(modelKey).get(type);
      if (context && context.indexOf(schemaContext) === -1) {
        context.push(schemaContext);
        program.stateMap(modelKey).set(type, context);
      }
    } else {
      program.stateMap(modelKey).set(type, [schemaContext]);
    }
  }
  function getGeneratedModels(model: Type, context: SchemaContext) {
    if (model.kind === "Model") {
      if (model.templateArguments && model.templateArguments.length > 0) {
        for (const temp of model.templateArguments) {
          setModelMap(temp, context);
          break;
        }
      }
      setModelMap(model, context);
      const indexer = (model as Model).indexer;
      if (indexer?.value && !program.stateMap(modelKey).get(indexer?.value)) {
        setModelMap(indexer.value, context);
      }
      for (const prop of model.properties) {
        if (
          prop[1].type.kind === "Model" &&
          (!program.stateMap(modelKey).get(prop[1].type) ||
            !program.stateMap(modelKey).get(prop[1].type)?.includes(context))
        ) {
          getGeneratedModels(prop[1].type, context);
        }
      }
      const derivedModels = model.derivedModels.filter(includeDerivedModel);

      // getSchemaOrRef on all children to push them into components.schemas
      for (const child of derivedModels) {
        if (
          child.kind === "Model" &&
          (!program.stateMap(modelKey).get(child) ||
            !program.stateMap(modelKey).get(child)?.includes(context))
        ) {
          getGeneratedModels(child, context);
        }
      }
    }
  }
  return schemas;
}
