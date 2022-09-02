import { getClient, ClientOptions } from "@azure-rest/core-client";
import { InputBasicClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): InputBasicClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-input-basic-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as InputBasicClient;

  return {
    ...client,
    inputBasic: {
      getModel: (options) => {
        return client.path("/input-basic/models").get(options);
      },
    },
  };
}
