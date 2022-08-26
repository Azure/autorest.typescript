import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ReadonlyPropertiesClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): ReadonlyPropertiesClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-readonly-property-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as ReadonlyPropertiesClient;

  return {
    ...client,
    readonlyProperties: {
      getOptionalPropertyModel: (options) => {
        return client.path("/readonly-properties/models").get(options);
      },
      setOptionalPropertyModel: (options) => {
        return client.path("/readonly-properties/models").put(options);
      },
    },
  };
}
