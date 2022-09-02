import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ModelsPropertyTypesClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): ModelsPropertyTypesClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-property-types-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as ModelsPropertyTypesClient;

  return {
    ...client,
    booleanOperations: {
      get: (options) => {
        return client.path("/models/properties/types/boolean").get(options);
      },
      put: (options) => {
        return client.path("/models/properties/types/boolean").put(options);
      },
    },
    stringOperations: {
      get: (options) => {
        return client.path("/models/properties/types/string").get(options);
      },
      put: (options) => {
        return client.path("/models/properties/types/string").put(options);
      },
    },
    bytes: {
      get: (options) => {
        return client.path("/models/properties/types/bytes").get(options);
      },
      put: (options) => {
        return client.path("/models/properties/types/bytes").put(options);
      },
    },
    int: {
      get: (options) => {
        return client.path("/models/properties/types/int").get(options);
      },
      put: (options) => {
        return client.path("/models/properties/types/int").put(options);
      },
    },
    float: {
      get: (options) => {
        return client.path("/models/properties/types/float").get(options);
      },
      put: (options) => {
        return client.path("/models/properties/types/float").put(options);
      },
    },
    datetime: {
      get: (options) => {
        return client.path("/models/properties/types/datetime").get(options);
      },
      put: (options) => {
        return client.path("/models/properties/types/datetime").put(options);
      },
    },
    duration: {
      get: (options) => {
        return client.path("/models/properties/types/duration").get(options);
      },
      put: (options) => {
        return client.path("/models/properties/types/duration").put(options);
      },
    },
    enum: {
      get: (options) => {
        return client.path("/models/properties/types/enum").get(options);
      },
      put: (options) => {
        return client.path("/models/properties/types/enum").put(options);
      },
    },
    extensibleEnum: {
      get: (options) => {
        return client
          .path("/models/properties/types/extensible-enum")
          .get(options);
      },
      put: (options) => {
        return client
          .path("/models/properties/types/extensible-enum")
          .put(options);
      },
    },
    model: {
      get: (options) => {
        return client.path("/models/properties/types/model").get(options);
      },
      put: (options) => {
        return client.path("/models/properties/types/model").put(options);
      },
    },
    collectionsString: {
      get: (options) => {
        return client
          .path("/models/properties/types/collections/string")
          .get(options);
      },
      put: (options) => {
        return client
          .path("/models/properties/types/collections/string")
          .put(options);
      },
    },
    collectionsInt: {
      get: (options) => {
        return client
          .path("/models/properties/types/collections/int")
          .get(options);
      },
      put: (options) => {
        return client
          .path("/models/properties/types/collections/int")
          .put(options);
      },
    },
    collectionsModel: {
      get: (options) => {
        return client
          .path("/models/properties/types/collections/model")
          .get(options);
      },
      put: (options) => {
        return client
          .path("/models/properties/types/collections/model")
          .put(options);
      },
    },
  };
}
