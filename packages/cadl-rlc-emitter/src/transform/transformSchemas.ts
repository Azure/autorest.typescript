// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Schema, SchemaContext } from "@azure-tools/rlc-codegen";
import {
  ModelType,
  ModelTypeProperty,
  Program,
  Type
} from "@cadl-lang/compiler";
import {
  getAllRoutes,
  getHeaderFieldName,
  getPathParamName,
  getQueryParamName,
  isStatusCode
} from "@cadl-lang/rest/http";
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
        const type = getEffectiveModelType(respModel?.type);
        getGeneratedModels(type, SchemaContext.Output);
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
  function isSchemaProperty(property: ModelTypeProperty) {
    const headerInfo = getHeaderFieldName(program, property);
    const queryInfo = getQueryParamName(program, property);
    const pathInfo = getPathParamName(program, property);
    const statusCodeInfo = isStatusCode(program, property);
    return !(headerInfo || queryInfo || pathInfo || statusCodeInfo);
  }
  function getEffectiveModelType(type: Type) {
    if (type.kind === "Model") {
      const effective = program.checker.getEffectiveModelType(
        type,
        isSchemaProperty
      );
      if (effective.name) {
        return effective;
      }
    }
    return type;
  }
  return schemas;
}
