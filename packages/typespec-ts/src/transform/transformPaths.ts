// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpOperation, HttpOperationParameters } from "@typespec/http";
import {
  Imports,
  OperationMethod,
  PathMetadata,
  Paths,
  SchemaContext,
  getParameterTypeName,
  getResponseTypeName
} from "@azure-tools/rlc-common";
import {
  SdkClient,
  getHttpOperationWithCache,
  isApiVersion,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import {
  extractOperationLroDetail,
  getOperationGroupName,
  getOperationName,
  getOperationResponseTypes,
  getOperationStatuscode,
  getOperationSuccessStatus,
  isPagingOperation,
  sortedOperationResponses
} from "../utils/operationUtil.js";
import {
  getImportedModelName,
  getSchemaForType,
  getTypeName,
  isBodyRequired
} from "../utils/modelUtils.js";

import { SdkContext } from "../utils/interfaces.js";
import { getDoc } from "@typespec/compiler";
import { getParameterWrapperInfo } from "../utils/parameterUtils.js";

export function transformPaths(
  client: SdkClient,
  dpgContext: SdkContext,
  importDetails: Imports
): Paths {
  const pathParamsImportedSet = new Set<string>();
  const paths: Paths = {};
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = getHttpOperationWithCache(dpgContext, clientOp);
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    transformOperation(dpgContext, route, paths, pathParamsImportedSet);
  }
  const operationGroups = listOperationGroups(dpgContext, client, true);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = getHttpOperationWithCache(dpgContext, op);
      // ignore overload base operation
      if (route.overloads && route.overloads?.length > 0) {
        continue;
      }
      transformOperation(dpgContext, route, paths, pathParamsImportedSet);
    }
  }

  if (pathParamsImportedSet.size > 0) {
    importDetails.rlcClientDefinition.importsSet = pathParamsImportedSet;
  }

  return paths;
}

function transformOperation(
  dpgContext: SdkContext,
  route: HttpOperation,
  paths: Paths,
  importSet: Set<string>
) {
  const program = dpgContext.program;
  const respNames = [];
  const operationGroupName = getOperationGroupName(dpgContext, route);
  for (const resp of sortedOperationResponses(route.responses)) {
    const respName = getResponseTypeName(
      operationGroupName,
      getOperationName(dpgContext, route.operation),
      getOperationStatuscode(resp)
    );
    respNames.push(respName);
  }
  const responseTypes = getOperationResponseTypes(dpgContext, route);
  const method: OperationMethod = {
    description: getDoc(program, route.operation) ?? "",
    hasOptionalOptions: !hasRequiredOptions(dpgContext, route.parameters),
    optionsName: getParameterTypeName(
      operationGroupName,
      getOperationName(dpgContext, route.operation)
    ),
    responseTypes,
    returnType: respNames.join(" | "),
    successStatus: getOperationSuccessStatus(route),
    operationName: getOperationName(dpgContext, route.operation),
    operationHelperDetail: {
      lroDetails: extractOperationLroDetail(
        dpgContext,
        route,
        responseTypes,
        operationGroupName
      ),
      isPaging: isPagingOperation(program, route)
    }
  };
  if (
    paths[route.path] !== undefined &&
    !paths[route.path]?.methods[route.verb]
  ) {
    (paths[route.path] as PathMetadata).methods[route.verb] = [method];
  } else if (paths[route.path]?.methods[route.verb]) {
    paths[route.path]?.methods[route.verb]?.push(method);
  } else {
    paths[route.path] = {
      description: getDoc(program, route.operation) ?? "",
      name: escapeCoreName(
        getOperationName(dpgContext, route.operation) || "Client"
      ),
      pathParameters: route.parameters.parameters
        .filter((p) => p.type === "path")
        .map((p) => {
          const schemaUsage = [SchemaContext.Input, SchemaContext.Exception];
          const options = {
            usage: schemaUsage,
            needRef: false,
            relevantProperty: p.param
          };
          const schema = p.param.sourceProperty
            ? getSchemaForType(
                dpgContext,
                p.param.sourceProperty?.type,

                options
              )
            : getSchemaForType(dpgContext, p.param.type, options);
          const importedNames = getImportedModelName(schema, schemaUsage) ?? [];
          importedNames.forEach(importSet.add, importSet);

          const [parameterBuilder, wrapperType] =
            getParameterWrapperInfo(
              dpgContext,
              p,
              schema,
              operationGroupName,
              method.operationName
            ) ?? [];
          let description = getDoc(program, p.param) ?? "";
          const typeName = getTypeName(wrapperType ?? schema, schemaUsage);
          if (wrapperType) {
            description = `${description} \n\nThis parameter type could be easily prepared with function ${parameterBuilder}.`;
          }
          return {
            name: p.name,
            type: typeName,
            description,
            wrapperType
          };
        }),
      operationGroupName: getOperationGroupName(dpgContext, route),
      methods: {
        [route.verb]: [method]
      }
    };
  }
}

function escapeCoreName(name: string) {
  if (["client", "streamablemethod"].indexOf(name.toLowerCase()) > -1) {
    return "_" + name;
  }
  return name;
}
function hasRequiredOptions(
  dpgContext: SdkContext,
  routeParameters: HttpOperationParameters
) {
  const isRequiredBodyParam = isBodyRequired(routeParameters);

  const containsRequiredNonBodyParam = routeParameters.parameters
    .filter((parameter) => ["query", "header"].includes(parameter.type))
    .filter((parameter) => !isApiVersion(dpgContext, parameter))
    .filter((parameter) => !!parameter.param)
    .some((parameter) => parameter.param.optional === false);
  return isRequiredBodyParam || containsRequiredNonBodyParam;
}
