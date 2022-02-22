// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { MediaTypes } from "./clientDefinitions";

export default function createMediaTypes(
  options: ClientOptions = {}
): MediaTypes {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as MediaTypes;

  return client;
}
