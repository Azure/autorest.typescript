// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { MediaTypesLike } from "./clientDefinitions";

export default function MediaTypes(
  options: ClientOptions = {}
): MediaTypesLike {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as MediaTypesLike;

  return client;
}
