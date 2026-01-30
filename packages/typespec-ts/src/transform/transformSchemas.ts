// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpOperation, getServers } from "@typespec/http";
import { KnownMediaType, extractMediaTypes } from "../utils/mediaTypes.js";
import { Model, Type } from "@typespec/compiler";
import {
  SdkClient,
  getHttpOperationWithCache
} from "@azure-tools/typespec-client-generator-core";
import {
  getBodyType,
  getDefaultService,
  getSchemaForType,
  includeDerivedModel,
  isAzureCoreErrorType,
  trimUsage
} from "../utils/modelUtils.js";

import { SchemaContext } from "@azure-tools/rlc-common";
import { SdkContext } from "../utils/interfaces.js";
import { useContext } from "../contextManager.js";
import { listOperationsUnderRLCClient } from "../utils/clientUtils.js";

export function transformSchemas(client: SdkClient, dpgContext: SdkContext) {
  const program = dpgContext.program;
  const metatree = useContext("rlcMetaTree");
  const schemas: Map<string, SchemaContext[]> = new Map<
    string,
    SchemaContext[]
  >();
  const schemaMap: Map<any, any> = new Map<any, any>();
  const usageMap = new Map<Type, SchemaContext[]>();
  const requestBodySet = new Set<Type>();
  const contentTypeMap = new Map<Type, KnownMediaType[]>();
  for (const op of listOperationsUnderRLCClient(client)) {
    const route = getHttpOperationWithCache(dpgContext, op);
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    transformSchemaForRoute(route);
  }
  function transformSchemaForRoute(route: HttpOperation) {
    if (route.parameters) {
      for (const param of route.parameters.parameters) {
        getGeneratedModels(param.param, SchemaContext.Input);
      }
    }
    const bodyModel = getBodyType(route);
    if (
      bodyModel &&
      (bodyModel.kind === "Model" ||
        bodyModel.kind === "Union" ||
        bodyModel.kind === "Enum")
    ) {
      requestBodySet.add(bodyModel);
      const contentTypes: KnownMediaType[] = extractMediaTypes(
        route.parameters.body?.contentTypes ?? []
      );
      if (contentTypes.length > 0) {
        contentTypeMap.set(bodyModel, contentTypes);
      }
      getGeneratedModels(bodyModel, SchemaContext.Input);
    }
    for (const resp of route.responses) {
      if (isAzureCoreErrorType(dpgContext.program, resp.type)) {
        continue;
      }
      for (const resps of resp.responses) {
        const headers = resps?.headers;
        if (headers && Object.keys(headers).length) {
          for (const value of Object.values(headers)) {
            getGeneratedModels(value, SchemaContext.Output);
          }
        }
        if (resps.body?.contentTypeProperty) {
          getGeneratedModels(
            resps.body.contentTypeProperty,
            SchemaContext.Output
          );
        }
        const respModel = resps?.body?.type;
        if (!respModel) {
          continue;
        }
        getGeneratedModels(respModel, SchemaContext.Output);
      }
    }
  }
  function transformHostParameters() {
    const serviceNs = getDefaultService(
      program,
      dpgContext.rlcOptions?.isModularLibrary
    )?.type;
    if (serviceNs) {
      const host = getServers(program, serviceNs);
      if (host && host?.[0] && host?.[0]?.parameters) {
        for (const key of host[0].parameters.keys()) {
          const type = host?.[0]?.parameters.get(key)?.type;
          if (!type) {
            continue;
          }
          getGeneratedModels(type, SchemaContext.Input);
        }
      }
    }
  }
  transformHostParameters();
  usageMap.forEach((context, tspModel) => {
    const model = getSchemaForType(dpgContext, tspModel, {
      usage: context,
      isRequestBody: requestBodySet.has(tspModel),
      isParentRequestBody: false,
      mediaTypes: contentTypeMap.get(tspModel)
    });
    if (model) {
      model.usage = context;
    }
    metatree.set(tspModel, { rlcType: model });
    if (model.name === "") {
      return;
    }
    const pureModel = JSON.stringify(trimUsage(model));
    schemaMap.set(pureModel, model);
    const usageSet = new Set((schemas.get(pureModel) ?? []).concat(context));
    schemas.set(pureModel, Array.from(usageSet));
  });

  function setModelMap(type: Type, schemaContext: SchemaContext) {
    if (usageMap.get(type)) {
      const context = usageMap.get(type);
      if (context && context.indexOf(schemaContext) === -1) {
        context.push(schemaContext);
        usageMap.set(type, context);
      }
    } else {
      usageMap.set(type, [schemaContext]);
    }
  }
  function getGeneratedModels(model: Type, context: SchemaContext) {
    if (model.kind === "Model") {
      setModelMap(model, context);
      const indexer = (model as Model).indexer;
      if (
        indexer?.value &&
        (!usageMap.get(indexer?.value) ||
          !usageMap.get(indexer?.value)?.includes(context))
      ) {
        getGeneratedModels(indexer.value, context);
      }
      for (const prop of model.properties) {
        const [, propType] = prop;
        if (usageMap.get(propType.type)?.includes(context)) {
          continue;
        }
        if (propType.type.kind === "Model") {
          if (isAzureCoreErrorType(dpgContext.program, propType.type)) {
            continue;
          }
          getGeneratedModels(propType.type, context);
        } else if (propType.type.kind === "Union") {
          const variants = Array.from(propType.type.variants.values());
          for (const variant of variants) {
            if (
              (variant.type.kind === "Model" ||
                variant.type.kind === "Union" ||
                variant.type.kind === "Enum") &&
              (!usageMap.get(variant.type) ||
                !usageMap.get(variant.type)?.includes(context))
            ) {
              getGeneratedModels(variant.type, context);
            }
          }
          // build type details for named union
          if (!propType.type.expression) {
            setModelMap(propType.type, context);
          }
        } else if (propType.type.kind === "Enum") {
          getGeneratedModels(propType.type, context);
        }
      }
      const baseModel = model.baseModel;
      if (
        baseModel &&
        baseModel.kind === "Model" &&
        (!usageMap.get(baseModel) ||
          !usageMap.get(baseModel)?.includes(context))
      ) {
        getGeneratedModels(baseModel, context);
      }
      const derivedModels = model.derivedModels.filter((dm) => {
        return includeDerivedModel(dm);
      });

      // getSchemaOrRef on all children to push them into components.schemas
      for (const child of derivedModels) {
        if (
          child.kind === "Model" &&
          (!usageMap.get(child) || !usageMap.get(child)?.includes(context))
        ) {
          getGeneratedModels(child, context);
        }
      }
    } else if (model.kind === "Union") {
      const variants = Array.from(model.variants.values());
      for (const variant of variants) {
        if (
          (variant.type.kind === "Model" || variant.type.kind === "Union") &&
          (!usageMap.get(variant.type) ||
            !usageMap.get(variant.type)?.includes(context))
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
    } else if (model.kind === "Enum") {
      setModelMap(model, context);
    }
  }
  const allSchemas = Array.from(schemas, function (item) {
    return { ...schemaMap.get(item[0]), usage: item[1] };
  });
  return allSchemas;
}
