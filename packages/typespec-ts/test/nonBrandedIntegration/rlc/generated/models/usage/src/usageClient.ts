// Licensed under the MIT license.

import { getClient, ClientOptions } from "@typespec/ts-http-runtime";
import { UsageClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `UsageClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(options: ClientOptions = {}): UsageClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-usage-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as UsageClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return client;
}
