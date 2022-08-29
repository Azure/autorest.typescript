import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ResiliencyDevDrivenClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): ResiliencyDevDrivenClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-dev-driven-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as ResiliencyDevDrivenClient;

  return client;
}
