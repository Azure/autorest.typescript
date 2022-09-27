import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ExtensibleEnumsClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class ExtensibleEnumsClient class.
 *
 */
export default function createClient(
  options: ClientOptions = {}
): ExtensibleEnumsClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  const userAgentInfo = `azsdk-js-extensible-enums-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as ExtensibleEnumsClient;

  return {
    ...client,
    stringOperations: {
      getKnownValue: (options) => {
        return client.path("/extensible-enums/string/known-value").get(options);
      },
      putKnownValue: (options) => {
        return client.path("/extensible-enums/string/known-value").put(options);
      },
      getUnknownValue: (options) => {
        return client
          .path("/extensible-enums/string/unknown-value")
          .get(options);
      },
      putUnknownValue: (options) => {
        return client
          .path("/extensible-enums/string/unknown-value")
          .put(options);
      },
    },
  };
}
