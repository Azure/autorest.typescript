import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { ParametrizedHostClient } from "./clientDefinitions";

export interface ParametrizedHostClientOptions extends ClientOptions {
  host?: "one";
  subdomain?: "two";
  sufix?: "three";
  apiVersion?: "v1";
}

/**
 * Initialize a new instance of the class ParametrizedHostClient class.
 * @param credentials type: TokenCredential
 */
export default function createClient(
  credentials: TokenCredential,
  options: ParametrizedHostClientOptions = {}
): ParametrizedHostClient {
  const host = options.host ?? "one";
  const subdomain = options.subdomain ?? "two";
  const sufix = options.sufix ?? "three";
  const apiVersion = options.apiVersion ?? "v1";
  const baseUrl =
    options.baseUrl ?? `${host}.${subdomain}.${sufix}.com/${apiVersion}`;

  options = {
    ...options,
    credentials: {
      scopes: ["https://parametrized-host.azure.com/.default"],
    },
  };

  const userAgentInfo = `azsdk-js-parametrized-host-rest/1.0.0-beta.1`;
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

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as ParametrizedHostClient;

  return client;
}
