// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { MultipleInheritanceRestClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): MultipleInheritanceRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const userAgentInfo = `azsdk-js-multiple-inheritance-rest/1.0.0-preview1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(baseUrl, options) as MultipleInheritanceRestClient;

  return {
    ...client,
    ...{
      getHorse: (options) => {
        return client.path("/multipleInheritance/horse").get(options);
      },
      putHorse: (options) => {
        return client.path("/multipleInheritance/horse").put(options);
      },
      getPet: (options) => {
        return client.path("/multipleInheritance/pet").get(options);
      },
      putPet: (options) => {
        return client.path("/multipleInheritance/pet").put(options);
      },
      getFeline: (options) => {
        return client.path("/multipleInheritance/feline").get(options);
      },
      putFeline: (options) => {
        return client.path("/multipleInheritance/feline").put(options);
      },
      getCat: (options) => {
        return client.path("/multipleInheritance/cat").get(options);
      },
      putCat: (options) => {
        return client.path("/multipleInheritance/cat").put(options);
      },
      getKitten: (options) => {
        return client.path("/multipleInheritance/kitten").get(options);
      },
      putKitten: (options) => {
        return client.path("/multipleInheritance/kitten").put(options);
      }
    }
  };
}
