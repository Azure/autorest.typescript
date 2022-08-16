import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { PetStoreServiceClient } from "./clientDefinitions";

export default function createClient(
  petStoreUrl: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): PetStoreServiceClient {
  const baseUrl = options.baseUrl ?? `${petStoreUrl}`;
  options.apiVersion = options.apiVersion ?? "2021-03-25";
  options = {
    ...options,
    credentials: {
      scopes: ["https://example.net/.default"],
    },
  };

  const userAgentInfo = `azsdk-js-pet-store-rest/1.0.0-beta.1`;
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
  ) as PetStoreServiceClient;

  return {
    ...client,
    pets: {
      delete: (petId, options) => {
        return client.path("/pets/{petId}", petId).delete(options);
      },
      read: (petId, options) => {
        return client.path("/pets/{petId}", petId).get(options);
      },
      create: (options) => {
        return client.path("/pets").post(options);
      },
    },
    listPetToysResponse: {
      list: (petId, options) => {
        return client.path("/pets/{petId}/toys", petId).get(options);
      },
    },
  };
}
