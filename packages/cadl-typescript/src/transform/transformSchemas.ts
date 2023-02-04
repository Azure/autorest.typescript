// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Client,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/cadl-dpg";
import { Schema, SchemaContext } from "@azure-tools/rlc-common";
import { ignoreDiagnostics, Model, Program, Type } from "@cadl-lang/compiler";
import { getHttpOperation, HttpOperation } from "@cadl-lang/rest/http";
import {
  getSchemaForType,
  includeDerivedModel,
  getBodyType
} from "../modelUtils.js";

export function transformSchemas(program: Program, client: Client) {
  const schemas: Map<Schema, SchemaContext[]> = new Map<
    Schema,
    SchemaContext[]
  >();
  const schemaMap: Map<any, any> = new Map<any, any>();
  const operationGroups = listOperationGroups(program, client);
  const modelKey = Symbol("typescript-models-" + client.name);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(program, operationGroup);
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      transformSchemaForRoute(route);
    }
  }
  const clientOperations = listOperationsInOperationGroup(program, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    transformSchemaForRoute(route);
  }
  function transformSchemaForRoute(route: HttpOperation) {
    const bodyModel = getBodyType(program, route);
    if (bodyModel && bodyModel.kind === "Model") {
      getGeneratedModels(bodyModel, SchemaContext.Input);
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
    if (model) {
      model.usage = context;
    }
    if (model.name === "") {
      return;
    }
    const pureModel = trimUsage(model);
    schemaMap.set(pureModel, model);
    let usage = schemas.get(pureModel) ?? [];
    if (!usage?.includes(context)) {
      usage = usage.concat(context as SchemaContext[]);
    }
    schemas.set(pureModel, usage);
  });
  function trimUsage(model: any) {
    if (typeof model !== "object") {
      return model;
    }
    const tmpModel = Object.assign({}, model);
    const tmpModelKeys = Object.keys(tmpModel).filter((item) => {
      return item !== "usage";
    });
    const ordered = tmpModelKeys.sort().reduce((obj, key) => {
      (obj as any)[key] = trimUsage(tmpModel[key]);
      return obj;
    }, {});
    return ordered;
  }
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
          if (
            !program.stateMap(modelKey).get(temp) ||
            !program.stateMap(modelKey).get(temp)?.includes(context)
          ) {
            getGeneratedModels(temp, context);
            break;
          }
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
      const baseModel = model.baseModel;
      if (
        baseModel &&
        baseModel.kind === "Model" &&
        (!program.stateMap(modelKey).get(baseModel) ||
          !program.stateMap(modelKey).get(baseModel)?.includes(context))
      ) {
        getGeneratedModels(baseModel, context);
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
  const allSchemas = Array.from(schemas, function (item) {
    return { ...schemaMap.get(item[0]), usage: item[1] };
  });
  return allSchemas;
}