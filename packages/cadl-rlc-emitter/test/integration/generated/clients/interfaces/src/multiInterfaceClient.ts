import { getClient, ClientOptions } from "@azure-rest/core-client";
import { MultiInterfaceClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): MultiInterfaceClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-client-interface-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as MultiInterfaceClient;

  return {
    ...client,
    dogs: {
      getDogs: (options) => {
        return client.path("/multi-interface/dogs").get(options);
      },
      setDogs: (options) => {
        return client.path("/multi-interface/dogs/models").put(options);
      },
    },
    cats: {
      getCats: (options) => {
        return client.path("/multi-interface/cats").get(options);
      },
      setCats: (options) => {
        return client.path("/multi-interface/cats").put(options);
      },
    },
  };
}
