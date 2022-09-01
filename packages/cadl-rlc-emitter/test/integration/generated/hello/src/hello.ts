import { getClient, ClientOptions } from "@azure-rest/core-client";
import { HelloClient } from "./clientDefinitions";

export default function createClient(options: ClientOptions = {}): HelloClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-hello-world-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as HelloClient;

  return {
    ...client,
    hello: {
      world: (options) => {
        return client.path("/hello/world").get(options);
      },
    },
  };
}
