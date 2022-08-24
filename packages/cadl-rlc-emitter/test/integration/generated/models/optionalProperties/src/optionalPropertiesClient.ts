import { getClient, ClientOptions } from "@azure-rest/core-client";
import { OptionalPropertiesClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): OptionalPropertiesClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-optional-property-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as OptionalPropertiesClient;

  return {
    ...client,
    optionalProperties: {
      sendOptionalPropertyModel: (options) => {
        return client.path("/optional-properties/models").post(options);
      },
      getOptionalPropertyModel: (options) => {
        return client.path("/optional-properties/models").get(options);
      },
      setOptionalPropertyModel: (options) => {
        return client.path("/optional-properties/models").put(options);
      },
    },
  };
}
