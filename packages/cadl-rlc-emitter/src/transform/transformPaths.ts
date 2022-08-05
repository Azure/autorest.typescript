// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Paths } from "@azure-tools/rlc-codegen";
import { Program } from "@cadl-lang/compiler";
import { getAllRoutes } from "@cadl-lang/rest/http";

export function transformPaths(model: Program): Paths {
  const [routes, _diagnostics] = getAllRoutes(model);
  const paths: Paths = {};
  for (const route of routes) {
    paths[route.path] = {
      // TODO: Description
      description: "",
      name: route.operation.name || "Client",
      pathParameters: route.parameters.parameters
        .filter((p) => p.type === "path")
        .map((p) => {
          return {
            name: p.name,
            type: "string",
            description: "param"
          };
        }),
      operationGroupName: route.groupName,
      methods: {
        [route.verb]: [
          {
            // TODO: Operation description
            description: "",
            hasOptionalOptions: route.parameters.parameters.some(
              (p) => p.param.optional
            ),
            optionsName: "options",
            responseTypes: { success: ["string"], error: [] },
            returnType: "",
            successStatus: ["200"],
            operationName: route.operation.name
          }
        ]
      }
    };
  }

  return paths;
}
