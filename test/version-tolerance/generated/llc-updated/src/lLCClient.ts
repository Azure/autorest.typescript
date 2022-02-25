// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { LLCClientLike } from "./clientDefinitions";

export default function LLCClient(options: ClientOptions = {}): LLCClientLike {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as LLCClientLike;

  return {
    ...client,
    params: {
      getRequired: (options) => {
        return client.path("/servicedriven/parameters").get(options);
      },
      postParameters: (options) => {
        return client.path("/servicedriven/parameters").post(options);
      },
      deleteParameters: (options) => {
        return client.path("/servicedriven/parameters").delete(options);
      },
      getNewOperation: (options) => {
        return client.path("/servicedriven/newpath").get(options);
      }
    }
  };
}
