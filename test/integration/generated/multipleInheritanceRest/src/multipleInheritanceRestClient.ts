// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { MultipleInheritanceRestClientRestClient } from "./clientDefinitions";

export default function MultipleInheritanceRestClient(
  options: ClientOptions = {}
): MultipleInheritanceRestClientRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(
    baseUrl,
    options
  ) as MultipleInheritanceRestClientRestClient;

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
