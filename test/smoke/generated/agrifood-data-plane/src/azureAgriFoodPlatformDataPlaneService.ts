// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { AzureAgriFoodPlatformDataPlaneServiceLike } from "./clientDefinitions";

export default function AzureAgriFoodPlatformDataPlaneService(
  Endpoint: string,
  credentials: TokenCredential,
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
