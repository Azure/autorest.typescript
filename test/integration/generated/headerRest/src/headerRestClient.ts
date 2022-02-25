// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { HeaderRestClientLike } from "./clientDefinitions";

export default function HeaderRestClient(
  options: ClientOptions = {}
): HeaderRestClientLike {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as HeaderRestClientLike;

  return client;
}
