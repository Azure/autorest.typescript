// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { AzureAgriFoodPlatformDataPlaneServiceRestClient } from "./clientDefinitions";

export default function AzureAgriFoodPlatformDataPlaneService(
  Endpoint: string,
  options: ClientOptions = {}
): AzureAgriFoodPlatformDataPlaneServiceRestClient {
  const baseUrl = options.baseUrl ?? `${Endpoint}`;
  options.apiVersion = options.apiVersion ?? "2021-03-31-preview";

  const client = getClient(
    baseUrl,
    options
  ) as AzureAgriFoodPlatformDataPlaneServiceRestClient;

  return client;
}
