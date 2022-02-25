// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { LRORestClientLike } from "./clientDefinitions";

export default function LRORestClient(
  options: ClientOptions = {}
): LRORestClientLike {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as LRORestClientLike;

  return client;
}
