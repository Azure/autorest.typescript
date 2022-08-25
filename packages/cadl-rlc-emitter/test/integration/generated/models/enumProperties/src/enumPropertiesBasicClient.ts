import { getClient, ClientOptions } from "@azure-rest/core-client";
import { EnumPropertiesBasicClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): EnumPropertiesBasicClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-enum-properties-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as EnumPropertiesBasicClient;

  return {
    ...client,
    enumPropertiesBasic: {
      sendEnumPropertyModel: (options) => {
        return client.path("/enum-properties-basic/models").post(options);
      },
      getEnumPropertModel: (options) => {
        return client.path("/enum-properties-basic/models").get(options);
      },
      setEnumPropertModel: (options) => {
        return client.path("/enum-properties-basic/models").put(options);
      },
    },
  };
}
