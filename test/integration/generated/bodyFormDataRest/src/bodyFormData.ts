// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { BodyFormDataLike } from "./clientDefinitions";

export default function BodyFormData(
  options: ClientOptions = {}
): BodyFormDataLike {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as BodyFormDataLike;

  return client;
}
