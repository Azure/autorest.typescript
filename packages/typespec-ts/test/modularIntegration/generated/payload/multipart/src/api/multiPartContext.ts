// Licensed under the MIT License.

import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

/** Test for multipart */
export interface MultiPartContext extends Client {}

/** Optional parameters for the client. */
export interface MultiPartClientOptionalParams extends ClientOptions {}

/** Test for multipart */
export function createMultiPart(
  options: MultiPartClientOptionalParams = {},
): MultiPartContext {
  const endpointUrl = options.endpoint ?? "http://localhost:3000";
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-payload-multipart/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
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
