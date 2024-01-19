// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SdkClient,
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
  trimUsage,
  isAzureCoreErrorType
} from "../utils/modelUtils.js";
import { SdkContext } from "../utils/interfaces.js";

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
  const modelKey = Symbol("typescript-models-" + client.name);
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    transformSchemaForRoute(route);
  }
  const operationGroups = listOperationGroups(dpgContext, client, true);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      // ignore overload base operation
      if (route.overloads && route.overloads?.length > 0) {
        continue;
      }
      transformSchemaForRoute(route);
    }
  }
  function transformSchemaForRoute(route: HttpOperation) {
    if (route.parameters) {
      for (const param of route.parameters.parameters) {
        getGeneratedModels(param.param, SchemaContext.Input);
      }
    }
    const bodyModel = getBodyType(program, route);
    if (
      bodyModel &&
      (bodyModel.kind === "Model" || bodyModel.kind === "Union")
    ) {
      getGeneratedModels(bodyModel, SchemaContext.Input);
    }
    for (const resp of route.responses) {
      if (isAzureCoreErrorType(resp.type)) {
        continue;
      }
      for (const resps of resp.responses) {
        const headers = resps?.headers;
        if (headers && Object.keys(headers).length) {
          for (const value of Object.values(headers)) {
            getGeneratedModels(value, SchemaContext.Output);
          }
        }

        const respModel = resps.body;
        if (!respModel) {
          continue;
        }
        getGeneratedModels(respModel.type, SchemaContext.Output);
      }
    }
  }
  program.stateMap(modelKey).forEach((context, tspModel) => {
    const model = getSchemaForType(dpgContext, tspModel, context);
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
      if (
        indexer?.value &&
        (!program.stateMap(modelKey).get(indexer?.value) ||
          !program
            .stateMap(modelKey)
            .get(indexer?.value)
            ?.includes(context))
      ) {
        getGeneratedModels(indexer.value, context);
      }
      for (const prop of model.properties) {
        const [, propType] = prop;
        if (
          propType.type.kind === "Model" &&
          (!program.stateMap(modelKey).get(propType.type) ||
            !program.stateMap(modelKey).get(propType.type)?.includes(context))
        ) {
          if (isAzureCoreErrorType(propType.type)) {
            continue;
          }
          getGeneratedModels(propType.type, context);
        }
        if (
          propType.type.kind === "Union" &&
          (!program.stateMap(modelKey).get(propType.type) ||
            !program.stateMap(modelKey).get(propType.type)?.includes(context))
        ) {
          const variants = Array.from(propType.type.variants.values());
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
              getGeneratedModels(variant.type, context);
            }
          }
          // build type details for named union
          if (!propType.type.expression) {
            setModelMap(propType.type, context);
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
      for (const variant of variants) {
        if (
          (variant.type.kind === "Model" || variant.type.kind === "Union") &&
          (!program.stateMap(modelKey).get(variant.type) ||
            !program.stateMap(modelKey).get(variant.type)?.includes(context))
        ) {
          getGeneratedModels(variant.type, context);
        }
      }
      // build type details for named union
      if (!model.expression) {
        setModelMap(model, context);
      }
    } else if (model.kind === "ModelProperty") {
      getGeneratedModels(model.type, context);
    }
  }
  const allSchemas = Array.from(schemas, function (item) {
    return { ...schemaMap.get(item[0]), usage: item[1] };
  });
  return allSchemas;
}
