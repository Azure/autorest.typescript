// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ClientOptions } from "@azure-rest/core-client";
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import type { TestServiceClient } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface TestServiceClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `TestServiceClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(options: TestServiceClientOptions = {}): TestServiceClient {
  const endpointUrl = options.endpoint ?? `language`;
  const userAgentInfo = `azsdk-js-test-rest/1.0.0-beta.1`;
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
  const client = getClient(endpointUrl, options) as TestServiceClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return {
    ...client,
    globalModel: {
      getPetSettings: (options) => {
        return client.path("/").get(options);
      },
    },
  };
}
