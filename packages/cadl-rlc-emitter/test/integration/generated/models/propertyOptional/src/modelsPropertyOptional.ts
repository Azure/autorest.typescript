import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ModelsPropertyOptionalClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): ModelsPropertyOptionalClient {
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

  const client = getClient(baseUrl, options) as ModelsPropertyOptionalClient;

  return {
    ...client,
    stringOperations: {
      getAll: (options) => {
        return client
          .path("/models/properties/optional/string/all")
          .get(options);
      },
      putAll: (options) => {
        return client
          .path("/models/properties/optional/string/all")
          .put(options);
      },
      getDefault: (options) => {
        return client
          .path("/models/properties/optional/string/default")
          .get(options);
      },
      putDefault: (options) => {
        return client
          .path("/models/properties/optional/string/default")
          .put(options);
      },
    },
    bytes: {
      getAll: (options) => {
        return client
          .path("/models/properties/optional/bytes/all")
          .get(options);
      },
      putAll: (options) => {
        return client
          .path("/models/properties/optional/bytes/all")
          .put(options);
      },
      getDefault: (options) => {
        return client
          .path("/models/properties/optional/bytes/default")
          .get(options);
      },
      putDefault: (options) => {
        return client
          .path("/models/properties/optional/bytes/default")
          .put(options);
      },
    },
    datetime: {
      getAll: (options) => {
        return client
          .path("/models/properties/optional/datetime/all")
          .get(options);
      },
      putAll: (options) => {
        return client
          .path("/models/properties/optional/datetime/all")
          .put(options);
      },
      getDefault: (options) => {
        return client
          .path("/models/properties/optional/datetime/default")
          .get(options);
      },
      putDefault: (options) => {
        return client
          .path("/models/properties/optional/datetime/default")
          .put(options);
      },
    },
    duration: {
      getAll: (options) => {
        return client
          .path("/models/properties/optional/duration/all")
          .get(options);
      },
      putAll: (options) => {
        return client
          .path("/models/properties/optional/duration/all")
          .put(options);
      },
      getDefault: (options) => {
        return client
          .path("/models/properties/optional/duration/default")
          .get(options);
      },
      putDefault: (options) => {
        return client
          .path("/models/properties/optional/duration/default")
          .put(options);
      },
    },
    collectionsByte: {
      getAll: (options) => {
        return client
          .path("/models/properties/optional/collections/bytes/all")
          .get(options);
      },
      putAll: (options) => {
        return client
          .path("/models/properties/optional/collections/bytes/all")
          .put(options);
      },
      getDefault: (options) => {
        return client
          .path("/models/properties/optional/collections/bytes/default")
          .get(options);
      },
      putDefault: (options) => {
        return client
          .path("/models/properties/optional/collections/bytes/default")
          .put(options);
      },
    },
    collectionsModel: {
      getAll: (options) => {
        return client
          .path("/models/properties/optional/collections/model/all")
          .get(options);
      },
      putAll: (options) => {
        return client
          .path("/models/properties/optional/collections/model/all")
          .put(options);
      },
      getDefault: (options) => {
        return client
          .path("/models/properties/optional/collections/model/default")
          .get(options);
      },
      putDefault: (options) => {
        return client
          .path("/models/properties/optional/collections/model/default")
          .put(options);
      },
    },
    requiredAndOptional: {
      getAll: (options) => {
        return client
          .path("/models/properties/optional/requiredAndOptional/all")
          .get(options);
      },
      putAll: (options) => {
        return client
          .path("/models/properties/optional/requiredAndOptional/all")
          .put(options);
      },
      getRequiredOnly: (options) => {
        return client
          .path("/models/properties/optional/requiredAndOptional/requiredOnly")
          .get(options);
      },
      putRequiredOnly: (options) => {
        return client
          .path("/models/properties/optional/requiredAndOptional/requiredOnly")
          .put(options);
      },
    },
  };
}
