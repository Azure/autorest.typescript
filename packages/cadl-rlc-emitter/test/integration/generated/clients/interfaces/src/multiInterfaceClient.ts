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
    multiInterfaceClient: {
      getDogs: (options) => {
        return client.path("/dogs").get(options);
      },
      setDogs: (options) => {
        return client.path("/dogs/models").put(options);
      },
      getCats: (options) => {
        return client.path("/cats").get(options);
      },
      setCats: (options) => {
        return client.path("/cats").put(options);
      },
    },
  };
}
