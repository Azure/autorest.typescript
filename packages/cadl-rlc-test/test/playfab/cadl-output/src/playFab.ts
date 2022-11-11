import { getClient, ClientOptions } from "@azure-rest/core-client";
import { PlayFabClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class PlayFabClient class.
 * @param endpoint type: string
 */
export default function createClient(
  endpoint: string,
  options: ClientOptions = {}
): PlayFabClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "0000-00-00";

  const userAgentInfo = `azsdk-js-playfab-rest/1.0.0-beta.1`;
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

  const client = getClient(baseUrl, options) as PlayFabClient;

  return client;
}
