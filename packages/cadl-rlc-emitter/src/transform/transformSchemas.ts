// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Schema, SchemaContext } from "@azure-tools/rlc-codegen";
import { ModelType, Program, Type } from "@cadl-lang/compiler";
import { getAllRoutes } from "@cadl-lang/rest/http";
import { getPagedResult, PagedResultMetadata } from "@azure-tools/cadl-azure-core";
import { getSchemaForType, includeDerivedModel } from "../modelUtils.js";

export function transformSchemas(program: Program) {
  const schemas: Schema[] = [];
  const [routes, _diagnostics] = getAllRoutes(program);
  const modelMap: Map<Type, SchemaContext[]> = new Map<Type, SchemaContext[]>();
  for (const route of routes) {
    if (route.parameters.bodyParameter) {
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
        const paged = getPagedMetadataNested(program, respModel.type as ModelType);
        if (paged) {
          paged;
        }
        getGeneratedModels(respModel.type, SchemaContext.Output);
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
    } else if ((type as ModelType).name !== "") {
      modelMap.set(type, [schemaContext]);
    }
  }
  function getGeneratedModels(model: Type, context: SchemaContext) {
    if (model.kind === "Model") {
      if (model.templateArguments && model.templateArguments.length) {
        for (const temp of model.templateArguments) {
          setModelMap(temp, context);
        }
      }
      setModelMap(model, context);
      const indexer = (model as ModelType).indexer;
      if (indexer?.value && !modelMap.has(indexer?.value)) {
        setModelMap(indexer.value, context);
      }
      for (const prop of model.properties) {
        if (
          prop[1].type.kind === "Model" &&
          (!modelMap.has(prop[1].type) ||
            !modelMap.get(prop[1].type)?.includes(context))
        ) {
          getGeneratedModels(prop[1].type, context);
        }
      }
      const derivedModels = model.derivedModels.filter(includeDerivedModel);

      // getSchemaOrRef on all children to push them into components.schemas
      for (const child of derivedModels) {
        if (
          child.kind === "Model" &&
          (!modelMap.has(child) || !modelMap.get(child)?.includes(context))
        ) {
          getGeneratedModels(child, context);
        }
      }
    }
  }
  function getPagedMetadataNested(
    program: Program,
    type: ModelType
  ): PagedResultMetadata | undefined {
    // This only works for `is Page<T>` not `extends Page<T>`.
    let paged = getPagedResult(program, type);
    if (paged) {
      return paged;
    }
    if (type.baseModel) {
      paged = getPagedResult(program, type.baseModel);
    }
    if (paged) {
      return paged;
    }
    const templateArguments = type.templateArguments;
    if (templateArguments) {
      for (const argument of templateArguments) {
        const modelArgument = argument as ModelType;
        if (modelArgument) {
          paged = getPagedMetadataNested(program, modelArgument);
          if (paged) {
            return paged;
          }
        }
      }
    }
    return paged;
  }
  return schemas;
}

