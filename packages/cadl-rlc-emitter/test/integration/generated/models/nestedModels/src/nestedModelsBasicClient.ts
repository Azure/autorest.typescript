import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { NestedModelsBasicClient } from "./clientDefinitions";

export default function createClient(
  credentials: TokenCredential,
  options: ClientOptions = {}
): NestedModelsBasicClient {
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
  ) as NestedModelsBasicClient;

  return {
    ...client,
    nestedModelsBasic: {
      sendNestedModel: (options) => {
        return client.path("/nested-models/models").post(options);
      },
      getNestedModel: (options) => {
        return client.path("/nested-models/models").get(options);
      },
      setNestedModel: (options) => {
        return client.path("/nested-models/models").put(options);
      },
    },
  };
}
