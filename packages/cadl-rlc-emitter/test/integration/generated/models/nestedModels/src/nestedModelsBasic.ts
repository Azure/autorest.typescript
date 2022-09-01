import { getClient, ClientOptions } from "@azure-rest/core-client";
import { NestedModelsBasicClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): NestedModelsBasicClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-nested-model-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as NestedModelsBasicClient;

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
