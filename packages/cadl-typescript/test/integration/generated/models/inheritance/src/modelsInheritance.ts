import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ModelsInheritanceClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class ModelsInheritanceClient class.
 *
 */
export default function createClient(
  options: ClientOptions = {}
): ModelsInheritanceClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
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

  const client = getClient(baseUrl, options) as ModelsInheritanceClient;

  return {
    ...client,
    inheritance: {
      postValid: (options) => {
        return client.path("/models/inheritance/valid").post(options);
      },
      getValid: (options) => {
        return client.path("/models/inheritance/valid").get(options);
      },
      putValid: (options) => {
        return client.path("/models/inheritance/valid").put(options);
      },
    },
    discriminated: {
      getModel: (options) => {
        return client
          .path("/models/inheritance/discriminated/model")
          .get(options);
      },
      putModel: (options) => {
        return client
          .path("/models/inheritance/discriminated/model")
          .put(options);
      },
      getRecursiveModel: (options) => {
        return client
          .path("/models/inheritance/discriminated/recursivemodel")
          .get(options);
      },
      putRecursiveModel: (options) => {
        return client
          .path("/models/inheritance/discriminated/recursivemodel")
          .put(options);
      },
      getMissingDiscriminator: (options) => {
        return client
          .path("/models/inheritance/discriminated/missingdiscriminator")
          .get(options);
      },
      getWrongDiscriminator: (options) => {
        return client
          .path("/models/inheritance/discriminated/wrongdiscriminator")
          .get(options);
      },
    },
  };
}
