// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ClientOptions } from "@azure-rest/core-client";
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger";
import type { KeyCredential } from "@azure/core-auth";
import type { SecurityKeyRestClient } from "./clientDefinitions";

/** The optional parameters for the client */
export interface SecurityKeyRestClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `SecurityKeyRestClient`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  credentials: KeyCredential,
  options: SecurityKeyRestClientOptions = {},
): SecurityKeyRestClient {
  const endpointUrl = options.endpoint ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-security-key-rest/1.0.0-preview1`;
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
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "security-key",
    },
  };
  const client = getClient(
    endpointUrl,
    credentials,
    options,
  ) as SecurityKeyRestClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return {
    ...client,
    ...{
      head: (options) => {
        return client.path("/securitykey").head(options);
      },
    },
  };
}
