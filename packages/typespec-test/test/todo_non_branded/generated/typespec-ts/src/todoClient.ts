// Licensed under the MIT license.

import { getClient, ClientOptions } from "@typespec/ts-http-runtime";
import { KeyCredential } from "@typespec/ts-http-runtime";
import { TodoClient } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `TodoClient`
 * @param endpointParam - The parameter endpointParam
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  credentials: KeyCredential,
  options: ClientOptions = {},
): TodoClient {
  const endpointUrl = options.endpoint ?? options.baseUrl ?? `${endpointParam}`;

  const userAgentInfo = `azsdk-js-todo-non-branded-rest/1.0.0-beta.1`;
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

  const client = getClient(endpointUrl, options) as TodoClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  client.pipeline.addPolicy({
    name: "customKeyCredentialPolicy",
    async sendRequest(request, next) {
      request.headers.set("Authorization", "bearer " + credentials.key);
      return next(request);
    },
  });
  return client;
}
