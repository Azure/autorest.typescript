// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { DictClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class DictClient class.
 *
 */
export default function createClient(options: ClientOptions = {}): DictClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  const userAgentInfo = `azsdk-js-dictionary-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as DictClient;

  return {
    ...client,
    int32Value: {
      get: (options) => {
        return client.path("/dictionary/int32").get(options);
      },
      put: (options) => {
        return client.path("/dictionary/int32").put(options);
      },
    },
    int64Value: {
      get: (options) => {
        return client.path("/dictionary/int64").get(options);
      },
      put: (options) => {
        return client.path("/dictionary/int64").put(options);
      },
    },
    booleanValue: {
      get: (options) => {
        return client.path("/dictionary/boolean").get(options);
      },
      put: (options) => {
        return client.path("/dictionary/boolean").put(options);
      },
    },
    stringValue: {
      get: (options) => {
        return client.path("/dictionary/string").get(options);
      },
      put: (options) => {
        return client.path("/dictionary/string").put(options);
      },
    },
    float32Value: {
      get: (options) => {
        return client.path("/dictionary/float32").get(options);
      },
      put: (options) => {
        return client.path("/dictionary/float32").put(options);
      },
    },
    datetimeValue: {
      get: (options) => {
        return client.path("/dictionary/datetime").get(options);
      },
      put: (options) => {
        return client.path("/dictionary/datetime").put(options);
      },
    },
    durationValue: {
      get: (options) => {
        return client.path("/dictionary/duration").get(options);
      },
      put: (options) => {
        return client.path("/dictionary/duration").put(options);
      },
    },
    unknownValue: {
      get: (options) => {
        return client.path("/dictionary/unknown").get(options);
      },
      put: (options) => {
        return client.path("/dictionary/unknown").put(options);
      },
    },
    modelValue: {
      get: (options) => {
        return client.path("/dictionary/model").get(options);
      },
      put: (options) => {
        return client.path("/dictionary/model").put(options);
      },
    },
    recursiveModelValue: {
      get: (options) => {
        return client.path("/dictionary/model/recursive").get(options);
      },
      put: (options) => {
        return client.path("/dictionary/model/recursive").put(options);
      },
    },
  };
}
