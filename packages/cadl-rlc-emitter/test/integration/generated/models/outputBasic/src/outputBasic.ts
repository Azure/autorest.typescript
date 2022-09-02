import { getClient, ClientOptions } from "@azure-rest/core-client";
import { OutputBasicClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): OutputBasicClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-output-basic-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as OutputBasicClient;

  return {
    ...client,
    outputBasic: {
      getModel: (options) => {
        return client.path("/output-basic/models").get(options);
      },
    },
  };
}
