// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { KeyCredential } from "@azure/core-auth";
import { OpenAIContext } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface OpenAIContextOptions extends ClientOptions {}

/**
 * Initialize a new instance of `OpenAIContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  credentials: KeyCredential,
  options: OpenAIContextOptions = {},
): OpenAIContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `https://api.openai.com/v1`;
  const userAgentInfo = `azsdk-js-openai-generic-rest/1.0.0-beta.1`;
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
  const client = getClient(endpointUrl, options) as OpenAIContext;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  client.pipeline.addPolicy({
    name: "customKeyCredentialPolicy",
    async sendRequest(request, next) {
      request.headers.set("Authorization", "Bearer " + credentials.key);
      return next(request);
    },
  });
  return client;
}
