// Licensed under the MIT License.

import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface ChatContext extends Client {}

/** Optional parameters for the client. */
export interface ChatClientOptionalParams extends ClientOptions {}

export function createChat(
  endpointParam: string,
  options: ChatClientOptionalParams = {},
): ChatContext {
  const endpointUrl = options.endpoint ?? `${endpointParam}`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-aichat/1.0.0-beta.1`;
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
