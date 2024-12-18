// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";

export interface ParametrizedHostContext extends Client {
  /** The API version to use for this operation. */
  apiVersion: string;
}

/** Optional parameters for the client. */
export interface ParametrizedHostClientOptionalParams extends ClientOptions {
  host?: string;
  subdomain?: string;
  sufix?: string;
}

export function createParametrizedHost(
  credential: TokenCredential,
  apiVersion: string,
  options: ParametrizedHostClientOptionalParams = {},
): ParametrizedHostContext {
  const host = options.host ?? "one";
  const subdomain = options.subdomain ?? "two";
  const sufix = options.sufix ?? "three";
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `${host}.${subdomain}.${sufix}.com`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-parametrized-host/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
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
  return { ...clientContext, apiVersion } as ParametrizedHostContext;
}
