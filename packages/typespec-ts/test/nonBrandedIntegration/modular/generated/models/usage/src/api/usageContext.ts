// Licensed under the MIT license.

import { ClientOptions, Client, getClient } from "@typespec/ts-http-runtime";

export interface UsageContext extends Client {}

/** Optional parameters for the client. */
export interface UsageClientOptionalParams extends ClientOptions {}

/** Illustrates usage of Record in different places(Operation parameters, return type or both). */
export function createUsage(
  options: UsageClientOptionalParams = {},
): UsageContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `http://localhost:3000`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const updatedOptions = { ...options, userAgentOptions: { userAgentPrefix } };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    console.warn(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
