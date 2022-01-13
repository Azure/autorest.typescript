// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { SynapseArtifactsRestClient } from "./clientDefinitions";

export default function SynapseArtifacts(
  endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): SynapseArtifactsRestClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "2021-11-01-preview";
  options = {
    ...options,
    credentials: {
      scopes: ["https://dev.azuresynapse.net/.default"]
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as SynapseArtifactsRestClient;

  return client;
}
