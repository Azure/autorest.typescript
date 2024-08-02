// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";

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
  options: ParametrizedHostClientOptionalParams = {},
): ParametrizedHostContext {
  const host = options.host;
  const subdomain = options.subdomain;
  const sufix = options.sufix;
  const apiVersion = options.apiVersion;
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${host}.${subdomain}.${sufix}.com/${apiVersion}`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const updatedOptions = {
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
