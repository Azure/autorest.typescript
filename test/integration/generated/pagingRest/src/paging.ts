// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { PagingRestClient } from "./clientDefinitions";

export default function Paging(options: ClientOptions = {}): PagingRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as PagingRestClient;

  return client;
}
