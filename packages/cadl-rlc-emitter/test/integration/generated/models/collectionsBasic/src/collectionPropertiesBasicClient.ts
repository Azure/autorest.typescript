import { getClient, ClientOptions } from "@azure-rest/core-client";
import { CollectionPropertiesBasicClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): CollectionPropertiesBasicClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-collection-basic-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as CollectionPropertiesBasicClient;

  return {
    ...client,
    collectionPropertiesBasic: {
      sendCollectionModel: (options) => {
        return client.path("/collection-properties-basic/models").post(options);
      },
      getCollectionModel: (options) => {
        return client.path("/collection-properties-basic/models").get(options);
      },
      setCollectionModel: (options) => {
        return client.path("/collection-properties-basic/models").put(options);
      },
    },
  };
}
