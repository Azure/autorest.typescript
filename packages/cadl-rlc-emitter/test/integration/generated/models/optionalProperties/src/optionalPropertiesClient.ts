import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { OptionalPropertiesClient } from "./clientDefinitions";

export default function createClient(
  credentials: TokenCredential,
  options: ClientOptions = {}
): OptionalPropertiesClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";
  options = {
    ...options,
    credentials: {
      scopes: ["https://example.net/.default"],
    },
  };

  const userAgentInfo = `azsdk-js-example-rest/1.0.0-beta.1`;
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

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as OptionalPropertiesClient;

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
