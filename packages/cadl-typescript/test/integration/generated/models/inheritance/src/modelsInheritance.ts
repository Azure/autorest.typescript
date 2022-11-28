// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ModelsInheritanceClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class ModelsInheritanceClient class.
 *
 */
export default function createClient(
  options: ClientOptions = {}
): ModelsInheritanceClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  const userAgentInfo = `azsdk-js-model-inheritance-rest/1.0.0`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };

  const client = getClient(baseUrl, options) as ModelsInheritanceClient;

  return client;
}
