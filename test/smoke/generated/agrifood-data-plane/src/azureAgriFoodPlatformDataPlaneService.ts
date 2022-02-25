// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { AzureAgriFoodPlatformDataPlaneServiceLike } from "./clientDefinitions";

export default function AzureAgriFoodPlatformDataPlaneService(
  Endpoint: string,
  options: ClientOptions = {}
): AzureAgriFoodPlatformDataPlaneServiceLike {
  const baseUrl = options.baseUrl ?? `${Endpoint}`;
  options.apiVersion = options.apiVersion ?? "2021-03-31-preview";

  const client = getClient(
    baseUrl,
    options
  ) as AzureAgriFoodPlatformDataPlaneServiceLike;

  return client;
}
