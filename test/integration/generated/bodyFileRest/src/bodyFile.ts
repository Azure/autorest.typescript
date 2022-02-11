// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { BodyFileRestClient } from "./clientDefinitions";

export default function BodyFile(
  options: ClientOptions = {}
): BodyFileRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as BodyFileRestClient;

  return client;
}
