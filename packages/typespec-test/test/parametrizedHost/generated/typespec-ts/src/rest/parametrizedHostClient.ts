// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { TokenCredential } from "@azure/core-auth";
import { ParametrizedHostContext } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface ParametrizedHostContextOptions extends ClientOptions {
  /** A sequence of textual characters. */
  host?: string;
  /** A sequence of textual characters. */
  subdomain?: string;
  /** A sequence of textual characters. */
  sufix?: string;
  /** A sequence of textual characters. */
  apiVersion?: string;
}

/**
 * Initialize a new instance of `ParametrizedHostContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  credentials: TokenCredential,
  { apiVersion = "v1", ...options }: ParametrizedHostContextOptions = {},
): ParametrizedHostContext {
  const host = options.host ?? "one";
  const subdomain = options.subdomain ?? "two";
  const sufix = options.sufix ?? "three";
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${host}.${subdomain}.${sufix}.com/${apiVersion}`;
  const userAgentInfo = `azsdk-js-parametrized-host-modular/1.0.0-beta.1`;
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
    endpointUrl,
    credentials,
    options,
  ) as ParametrizedHostContext;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
