// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { CustomUrlRestClientLike } from "./clientDefinitions";

export default function CustomUrlRestClient(
  host: string,
  options: ClientOptions = {}
): CustomUrlRestClientLike {
  const baseUrl = options.baseUrl ?? `http://{accountName}${host}`;
  const client = getClient(baseUrl, options) as CustomUrlRestClientLike;

  return {
    ...client,
    paths: {
      getEmpty: (options) => {
        return client.path("/customuri").get(options);
      }
    }
  };
}
