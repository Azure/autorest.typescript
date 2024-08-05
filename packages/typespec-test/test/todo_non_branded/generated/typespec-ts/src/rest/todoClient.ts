// Licensed under the MIT license.

import { getClient, ClientOptions } from "@typespec/ts-http-runtime";
import { KeyCredential } from "@typespec/ts-http-runtime";
import { TodoContext } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface TodoContextOptions extends ClientOptions {}

/**
 * Initialize a new instance of `TodoContext`
 * @param endpointParam - The parameter endpointParam
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  credentials: KeyCredential,
  options: TodoContextOptions = {},
): TodoContext {
  const endpointUrl = options.endpoint ?? options.baseUrl ?? `${endpointParam}`;
  const userAgentInfo = `azsdk-js-todo-non-branded/1.0.0-beta.1`;
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
  const client = getClient(endpointUrl, options) as TodoContext;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  client.pipeline.addPolicy({
    name: "customKeyCredentialPolicy",
    async sendRequest(request, next) {
      request.headers.set("Authorization", "Bearer " + credentials.key);
      return next(request);
    },
  });
  return client;
}
