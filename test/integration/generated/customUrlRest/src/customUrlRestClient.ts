// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { CustomUrlRestClientRestClient } from "./clientDefinitions";

export default function CustomUrlRestClient(
  host: string,
  options: ClientOptions = {}
): CustomUrlRestClientRestClient {
  const baseUrl = options.baseUrl ?? `http://{accountName}${host}`;
  const client = getClient(baseUrl, options) as CustomUrlRestClientRestClient;

  return {
    ...client,
    paths: {
      getEmpty: (options) => {
        return client.path("/customuri").get(options);
      }
    }
  };
}
