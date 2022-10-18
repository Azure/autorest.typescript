import { getClient, ClientOptions } from "@azure-rest/core-client";
import { AzureLroClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class AzureLroClient class.
 *
 */
export default function createClient(
  options: ClientOptions = {}
): AzureLroClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  const userAgentInfo = `azsdk-js-lro-basic-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as AzureLroClient;

  return {
    ...client,
    pollingSuccess: {
      create: (options) => {
        return client.path("/lro/basic/put").put(options);
      },
      get: (options) => {
        return client.path("/lro/basic/put").get(options);
      },
      polling: (options) => {
        return client.path("/lro/basic/put/polling").get(options);
      },
    },
  };
}
