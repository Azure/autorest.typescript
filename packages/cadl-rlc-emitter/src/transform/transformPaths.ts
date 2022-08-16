// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PathMetadata, Paths } from "@azure-tools/rlc-codegen";
import { getDoc, Program } from "@cadl-lang/compiler";
import { getAllRoutes } from "@cadl-lang/rest/http";
import { getSchemaForType } from "../modelUtils.js";

export function transformPaths(program: Program): Paths {
  const [routes, _diagnostics] = getAllRoutes(program);
  const paths: Paths = {};
  for (const route of routes) {
    const method = {
      description: getDoc(program, route.operation) ?? "",
      hasOptionalOptions: route.parameters.parameters.some(
        (p) => p.param.optional
      ),
      optionsName: "options",
      responseTypes: { success: ["string"], error: [] },
      returnType: "",
      successStatus: ["200"],
      operationName: route.operation.name
    }
    if (paths[route.path] !== undefined && !paths[route.path]?.methods[route.verb]) {
      (paths[route.path] as PathMetadata).methods[route.verb] = [method];
    } else if (paths[route.path]?.methods[route.verb]) {
      paths[route.path]?.methods[route.verb]?.push(method);
    } else {
      paths[route.path] = {
        // TODO: Description
        description: getDoc(program, route.operation) ?? "",
        name: route.operation.name || "Client",
        pathParameters: route.parameters.parameters
          .filter((p) => p.type === "path")
          .map((p) => {
            return {
              name: p.name,
              type: p.param.sourceProperty
                ? getSchemaForType(program, p.param.sourceProperty?.type).type
                : getSchemaForType(program, p.param.type).type,
              description: getDoc(program, p.param)
            };
          }),
        operationGroupName: route.groupName,
        methods: {
          [route.verb]: [method]
        }
      };
    }
  }

  return paths;
}
