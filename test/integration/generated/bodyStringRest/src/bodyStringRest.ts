// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { BodyStringRestLike } from "./clientDefinitions";

export default function BodyStringRest(
  options: ClientOptions = {}
): BodyStringRestLike {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as BodyStringRestLike;

  return client;
}
