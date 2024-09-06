// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";

export interface ParametrizedHostContext extends Client {}

/** Optional parameters for the client. */
export interface ParametrizedHostClientOptionalParams extends ClientOptions {
  host?: string;
  subdomain?: string;
  sufix?: string;
  apiVersion?: string;
}

export function createParametrizedHost(
  credential: TokenCredential,
  apiVersion: string,
  options: ParametrizedHostClientOptionalParams = {},
): ParametrizedHostContext {
  const host = options.host ?? "one";
  const subdomain = options.subdomain ?? "two";
  const sufix = options.sufix ?? "three";
  const apiVersion = options.apiVersion ?? "v1";
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${host}.${subdomain}.${sufix}.com/${apiVersion}`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://parametrized-host.azure.com/.default",
      ],
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return clientContext;
}
