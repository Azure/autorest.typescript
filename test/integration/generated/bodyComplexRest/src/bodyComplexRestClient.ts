// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { BodyComplexRestClientRestClient } from "./clientDefinitions";

export default function BodyComplexRestClient(
  options: ClientOptions = {}
): BodyComplexRestClientRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "2016-02-29";

  const client = getClient(baseUrl, options) as BodyComplexRestClientRestClient;

  return client;
}
