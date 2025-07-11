// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ClientOptions } from "@azure-rest/core-client";
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger";
import type { MultipleInheritanceRestClient } from "./clientDefinitions";

/** The optional parameters for the client */
export interface MultipleInheritanceRestClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `MultipleInheritanceRestClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: MultipleInheritanceRestClientOptions = {},
): MultipleInheritanceRestClient {
  const endpointUrl = options.endpoint ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-multiple-inheritance-rest/1.0.0-preview1`;
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
  const client = getClient(
    endpointUrl,
    options,
  ) as MultipleInheritanceRestClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return {
    ...client,
    ...{
      getHorse: (options) => {
        return client.path("/multipleInheritance/horse").get(options);
      },
      putHorse: (options) => {
        return client.path("/multipleInheritance/horse").put(options);
      },
      getPet: (options) => {
        return client.path("/multipleInheritance/pet").get(options);
      },
      putPet: (options) => {
        return client.path("/multipleInheritance/pet").put(options);
      },
      getFeline: (options) => {
        return client.path("/multipleInheritance/feline").get(options);
      },
      putFeline: (options) => {
        return client.path("/multipleInheritance/feline").put(options);
      },
      getCat: (options) => {
        return client.path("/multipleInheritance/cat").get(options);
      },
      putCat: (options) => {
        return client.path("/multipleInheritance/cat").put(options);
      },
      getKitten: (options) => {
        return client.path("/multipleInheritance/kitten").get(options);
      },
      putKitten: (options) => {
        return client.path("/multipleInheritance/kitten").put(options);
      },
    },
  };
}
