import { getClient, ClientOptions } from "@azure-rest/core-client";
import { PrimitivePropertyClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): PrimitivePropertyClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-primitive-property-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as PrimitivePropertyClient;

  return {
    ...client,
    primitiveProperties: {
      getModel: (options) => {
        return client.path("/primitive-properties/models").get(options);
      },
    },
  };
}
