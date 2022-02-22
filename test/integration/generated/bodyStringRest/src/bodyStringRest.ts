// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { BodyStringRest } from "./clientDefinitions";

export default function createBodyStringRest(
  options: ClientOptions = {}
): BodyStringRest {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as BodyStringRest;

  return client;
}
