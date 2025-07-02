// Licensed under the MIT License.

import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

/** Test for range of status code. */
export interface StatusCodeRangeContext extends Client {}

/** Optional parameters for the client. */
export interface StatusCodeRangeClientOptionalParams extends ClientOptions {}

/** Test for range of status code. */
export function createStatusCodeRange(
  options: StatusCodeRangeClientOptionalParams = {},
): StatusCodeRangeContext {
  const endpointUrl = options.endpoint ?? "http://localhost:3000";
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : `azsdk-js-api`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    console.warn(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
