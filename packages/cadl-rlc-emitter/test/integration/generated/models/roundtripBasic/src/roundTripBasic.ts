import { getClient, ClientOptions } from "@azure-rest/core-client";
import { RoundTripBasicClient } from "./clientDefinitions";

export default function createClient(
  options: ClientOptions = {}
): RoundTripBasicClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-roundtrip-basic-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as RoundTripBasicClient;

  return client;
}
