// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Pipeline } from "@azure/core-rest-pipeline";

export function addCookiePolicies(pipeline: Pipeline): void {
  let cookie: any;
  pipeline.addPolicy(
    {
      name: "get-cookie",
      sendRequest: async (req, next) => {
        const result = await next(req);
        cookie = result.headers.get("set-cookie");
        return result;
      }
    },
    { afterPhase: "Deserialize" }
  );
  pipeline.addPolicy(
    {
      name: "set-cookie",
      sendRequest: async (req, next) => {
        if (cookie) {
          req.headers.set("cookie", cookie);
          cookie = undefined;
        }
        return next(req);
      }
    },
    { afterPhase: "Deserialize" }
  );
}
