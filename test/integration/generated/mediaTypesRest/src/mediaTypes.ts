// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { MediaTypesRestClient } from "./clientDefinitions";

export function MediaTypes(options: ClientOptions = {}): MediaTypesRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as MediaTypesRestClient;

  return client;
}
