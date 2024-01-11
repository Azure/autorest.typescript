// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { TokenCredential } from "@azure/core-auth";
import { ParametrizedHostClient } from "./clientDefinitions";

export interface ParametrizedHostClientOptions extends ClientOptions {
  host?: string;
  subdomain?: string;
  sufix?: string;
  apiVersion?: string;
}

/**
 * Initialize a new instance of `ParametrizedHostClient`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  credentials: TokenCredential,
  options: ParametrizedHostClientOptions = {},
): ParametrizedHostClient {
  const host = options.host ?? "one";
  const subdomain = options.subdomain ?? "two";
  const sufix = options.sufix ?? "three";
  const apiVersion = options.apiVersion ?? "v1";
  const baseUrl =
    options.baseUrl ?? `${host}.${subdomain}.${sufix}.com/${apiVersion}`;

  const userAgentInfo = `azsdk-js-parametrized-host-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://parametrized-host.azure.com/.default",
      ],
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options,
  ) as ParametrizedHostClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
