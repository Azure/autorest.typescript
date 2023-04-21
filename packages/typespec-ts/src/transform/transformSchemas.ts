// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SdkClient,
  SdkContext,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import { SchemaContext } from "@azure-tools/rlc-common";
import { ignoreDiagnostics, Model, Program, Type } from "@typespec/compiler";
import { getHttpOperation, HttpOperation } from "@typespec/http";
import {
  getSchemaForType,
  includeDerivedModel,
  getBodyType,
  trimUsage
} from "../modelUtils.js";

export function transformSchemas(
  program: Program,
  client: SdkClient,
  dpgContext: SdkContext
) {
  const schemas: Map<string, SchemaContext[]> = new Map<
    string,
    SchemaContext[]
  >();
  const schemaMap: Map<any, any> = new Map<any, any>();
  const operationGroups = listOperationGroups(dpgContext, client);
  const modelKey = Symbol("typescript-models-" + client.name);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      transformSchemaForRoute(route);
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
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
      if (
        resp.type.kind === "Model" &&
        resp.type.name === "ErrorResponse" &&
        resp.type.namespace?.name === "Foundations" &&
        resp.type.namespace.namespace?.name === "Core"
      ) {
        continue;
      }
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
    const pureModel = JSON.stringify(trimUsage(model));
    schemaMap.set(pureModel, model);
    let usage = schemas.get(pureModel) ?? [];
    if (!usage?.includes(context)) {
      usage = usage.concat(context as SchemaContext[]);
    }
    schemas.set(pureModel, usage);
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
      if (
        model.templateMapper &&
        model.templateMapper.args &&
        model.templateMapper.args.length > 0
      ) {
        const temp = model.templateMapper.args[0];
        if (
          temp &&
          temp.kind === "Model" &&
          (!program.stateMap(modelKey).get(temp) ||
            !program.stateMap(modelKey).get(temp)?.includes(context))
        ) {
          getGeneratedModels(temp, context);
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
          if (prop[1].type.name === "Error") {
            continue;
          }
          getGeneratedModels(prop[1].type, context);
        }
        if (
          prop[1].type.kind === "Union" &&
          (!program.stateMap(modelKey).get(prop[1].type) ||
            !program.stateMap(modelKey).get(prop[1].type)?.includes(context))
        ) {
          const variants = Array.from(prop[1].type.variants.values());
          let hasModels = false;
          for (const variant of variants) {
            if (
              (variant.type.kind === "Model" ||
                variant.type.kind === "Union") &&
              (!program.stateMap(modelKey).get(variant.type) ||
                !program
                  .stateMap(modelKey)
                  .get(variant.type)
                  ?.includes(context))
            ) {
              hasModels = true;
              getGeneratedModels(variant.type, context);
            }
          }
          if (hasModels) {
            setModelMap(prop[1].type, context);
          }
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
    } else if (model.kind === "Union") {
      const variants = Array.from(model.variants.values());
      let hasModels = false;
      for (const variant of variants) {
        if (
          (variant.type.kind === "Model" || variant.type.kind === "Union") &&
          (!program.stateMap(modelKey).get(variant.type) ||
            !program.stateMap(modelKey).get(variant.type)?.includes(context))
        ) {
          hasModels = true;
          getGeneratedModels(variant.type, context);
        }
      }
      if (hasModels) {
        setModelMap(model, context);
      }
    }
  }
  const allSchemas = Array.from(schemas, function (item) {
    return { ...schemaMap.get(item[0]), usage: item[1] };
  });
  return allSchemas;
}
