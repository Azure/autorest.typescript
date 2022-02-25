// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { BodyFileLike } from "./clientDefinitions";

export default function BodyFile(options: ClientOptions = {}): BodyFileLike {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as BodyFileLike;

  return client;
}
