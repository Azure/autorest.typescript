// Licensed under the MIT License.

import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

/** API for managing a book store inventory and orders */
export interface BookStoreContext extends Client {}

/** Optional parameters for the client. */
export interface BookStoreClientOptionalParams extends ClientOptions {}

/** API for managing a book store inventory and orders */
export function createBookStore(
  options: BookStoreClientOptionalParams = {},
): BookStoreContext {
  const endpointUrl = options.endpoint ?? "http://127.0.0.1:4010";
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-BookStoreApi/1.0.0-beta.1`;
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
