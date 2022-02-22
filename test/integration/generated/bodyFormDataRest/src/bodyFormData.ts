// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { BodyFormData } from "./clientDefinitions";

export default function createBodyFormData(
  options: ClientOptions = {}
): BodyFormData {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as BodyFormData;

  return client;
}
