import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ArrayItemTypesClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class ArrayItemTypesClient class.
 *
 */
export default function createClient(
  options: ClientOptions = {}
): ArrayItemTypesClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  const userAgentInfo = `azsdk-js-array-itemtypes-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as ArrayItemTypesClient;

  return {
    ...client,
    int32Value: {
      get: (options) => {
        return client.path("/array/item-types/int32").get(options);
      },
      put: (options) => {
        return client.path("/array/item-types/int32").put(options);
      },
    },
    int64Value: {
      get: (options) => {
        return client.path("/array/item-types/int64").get(options);
      },
      put: (options) => {
        return client.path("/array/item-types/int64").put(options);
      },
    },
    booleanValue: {
      get: (options) => {
        return client.path("/array/item-types/boolean").get(options);
      },
      put: (options) => {
        return client.path("/array/item-types/boolean").put(options);
      },
    },
    stringValue: {
      get: (options) => {
        return client.path("/array/item-types/string").get(options);
      },
      put: (options) => {
        return client.path("/array/item-types/string").put(options);
      },
    },
    float32Value: {
      get: (options) => {
        return client.path("/array/item-types/float32").get(options);
      },
      put: (options) => {
        return client.path("/array/item-types/float32").put(options);
      },
    },
    datetimeValue: {
      get: (options) => {
        return client.path("/array/item-types/datetime").get(options);
      },
      put: (options) => {
        return client.path("/array/item-types/datetime").put(options);
      },
    },
    durationValue: {
      get: (options) => {
        return client.path("/array/item-types/duration").get(options);
      },
      put: (options) => {
        return client.path("/array/item-types/duration").put(options);
      },
    },
    unknownValue: {
      get: (options) => {
        return client.path("/array/item-types/unknown").get(options);
      },
      put: (options) => {
        return client.path("/array/item-types/unknown").put(options);
      },
    },
    modelValue: {
      get: (options) => {
        return client.path("/array/item-types/model").get(options);
      },
      put: (options) => {
        return client.path("/array/item-types/model").put(options);
      },
    },
  };
}
