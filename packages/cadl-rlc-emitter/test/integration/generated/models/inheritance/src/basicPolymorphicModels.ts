import { getClient, ClientOptions } from "@azure-rest/core-client";
import { BasicPolymorphicModelsClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): BasicPolymorphicModelsClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-model-inheritance-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as BasicPolymorphicModelsClient;

  return {
    ...client,
    basicPolymorphicModels: {
      setValue: (options) => {
        return client.path("/polymorphic/model").put(options);
      },
      setValueWithPolymorphicProperty: (options) => {
        return client.path("/polymorphic/property").put(options);
      },
    },
  };
}
