// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { ParametrizedHostClient } from "./clientDefinitions";

export interface ParametrizedHostClientOptions extends ClientOptions {
  host?: string;
  subdomain?: string;
  sufix?: string;
  apiVersion?: string;
}

/**
 * Initialize a new instance of `ParametrizedHostClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: ParametrizedHostClientOptions = {}
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
  };

  const client = getClient(baseUrl, options) as ParametrizedHostClient;

  return client;
}
