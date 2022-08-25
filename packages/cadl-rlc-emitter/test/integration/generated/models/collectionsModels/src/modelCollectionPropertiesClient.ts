import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ModelCollectionPropertiesClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): ModelCollectionPropertiesClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-collections-models-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as ModelCollectionPropertiesClient;

  return {
    ...client,
    modelCollectionProperties: {
      sendCollectionModel: (options) => {
        return client.path("/collection-models/models").post(options);
      },
      getCollectionModel: (options) => {
        return client.path("/collection-models/models").get(options);
      },
      setCollectionModel: (options) => {
        return client.path("/collection-models/models").put(options);
      },
    },
  };
}
