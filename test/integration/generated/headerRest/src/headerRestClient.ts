// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { HeaderRestClientRestClient } from "./clientDefinitions";

export default function HeaderRestClient(
  options: ClientOptions = {}
): HeaderRestClientRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as HeaderRestClientRestClient;

  return client;
}
