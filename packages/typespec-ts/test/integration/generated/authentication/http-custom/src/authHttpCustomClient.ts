// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { KeyCredential } from "@azure/core-auth";
import { AuthHttpCustomClient } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `AuthHttpCustomClient`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  credentials: KeyCredential,
  options: ClientOptions = {},
): AuthHttpCustomClient {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-auth-httpcustom-rest/1.0.0`;
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

  const client = getClient(endpointUrl, options) as AuthHttpCustomClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  client.pipeline.addPolicy({
    name: "customKeyCredentialPolicy",
    async sendRequest(request, next) {
      request.headers.set(
        "Authorization",
        "SharedAccessKey " + credentials.key,
      );
      return next(request);
    },
  });
  return client;
}
