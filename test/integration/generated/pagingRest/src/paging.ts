// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { PagingLike } from "./clientDefinitions";

export default function Paging(options: ClientOptions = {}): PagingLike {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as PagingLike;

  return client;
}
