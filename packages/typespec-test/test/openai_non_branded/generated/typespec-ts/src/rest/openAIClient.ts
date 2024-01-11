// Licensed under the MIT license.

import { getClient, ClientOptions } from "@typespec/ts-http-runtime";
import { KeyCredential } from "@typespec/ts-http-runtime";
import { OpenAIContext } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `OpenAIContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  credentials: KeyCredential,
  options: ClientOptions = {},
): OpenAIContext {
  const baseUrl = options.baseUrl ?? `https://api.openai.com/v1`;
  const userAgentInfo = `azsdk-js-openai-non-branded-rest/1.0.0-beta.1`;
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

  const client = getClient(baseUrl, options) as OpenAIContext;

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
