// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { LRORestClient } from "./clientDefinitions";

export default function createLRORestClient(
  options: ClientOptions = {}
): LRORestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as LRORestClient;

  return client;
}
